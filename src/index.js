import { useState } from 'react';
import axios from 'axios';

export const useAppFunctions = () => {
  const [image, setImage] = useState(null); // 이미지 업로드 관련 상태
  const [analysisResult, setAnalysisResult] = useState(null);

  // 이미지가 업로드될 때 호출되는 함수
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post(`${API_BASE_URL}/upload/`, formData);
        setImage({
          localUrl: URL.createObjectURL(file), // 로컬 미리보기
          serverUrl: response.data.file_url,   // 서버 URL
        });
      } catch (error) {
        console.error('Upload error', error);
        alert('이미지 업로드에 실패했습니다.');
      }
    } else {
      alert('파일이 선택되지 않았습니다. 파일을 선택해 주세요.');
    }
  };

  // "해석 시작" 버튼이 눌렸을 때 호출되는 함수
  const handleStartAnalysis = async () => {
    if (image?.serverUrl) {
      try {
        const response = await axios.get(`${API_BASE_URL}/analyze/?image=${encodeURIComponent(image.serverUrl)}`);
        setAnalysisResult(response.data);
      } catch (error) {
        console.error('Analysis error', error);
        alert('분석 중 오류가 발생했습니다.');
      }
    } else {
      alert('먼저 이미지를 업로드해주세요.');
    }
  };

  return {
    image,
    analysisResult,
    handleImageUpload,
    handleStartAnalysis
  };
};
