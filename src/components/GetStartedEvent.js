import React, { useState } from 'react';
import axios from 'axios';

export const useImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  // 이미지 업로드 함수
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      axios.post('https://a236-106-255-245-242.ngrok-free.app/upload/', formData)
        .then(response => {
          setImageURL(response.data.file_url);
          setSelectedImage(URL.createObjectURL(file));  // 로컬 미리보기용 이미지 설정
        })
        .catch(error => console.error('Upload error:', error));
    } else {
      alert('파일이 선택되지 않았습니다.');
    }
  };

  // 이미지 분석 함수
  const handleStartAnalysis = () => {
    if (imageURL) {
      axios.get(`https://a236-106-255-245-242.ngrok-free.app/analyze/?image=${encodeURIComponent(imageURL)}`)
        .then(response => {
          setAnalysisResult(response.data);  // 분석 결과 저장
        })
        .catch(error => console.error('Analysis error:', error));
    } else {
      alert('먼저 이미지를 업로드해주세요.');
    }
  };

  return {
    handleImageUpload,
    handleStartAnalysis,
    selectedImage,
    analysisResult,
  };
};
