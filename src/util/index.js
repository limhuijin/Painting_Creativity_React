import { useState } from 'react';
import axios from 'axios';

export const useAppFunctions = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  // 이미지가 업로드될 때 호출되는 함수
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      axios.post('경로', formData)
        .then(response => {
          setImageURL(response.data.file_url);
          setSelectedImage(URL.createObjectURL(file)); // 로컬에서 미리보기
        })
        .catch(error => console.error('Upload error:', error));
    } else {
      alert('파일이 선택되지 않았습니다.');
    }
  };

  // "해석 시작" 버튼이 눌렸을 때 호출되는 함수
  const handleStartAnalysis = () => {
    if (imageURL) {
      axios.get(`경로/analyze/?image=${encodeURIComponent(imageURL)}`)
        .then(response => {
          setAnalysisResult(response.data); // 분석 결과 저장
        })
        .catch(error => console.error('Analysis error:', error));
    } else {
      alert('먼저 이미지를 업로드해주세요.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br /><br />
      <button onClick={handleStartAnalysis}>해석 시작</button>
      
      {selectedImage && <img src={selectedImage} alt="Uploaded" style={{ width: '300px', marginTop: '20px' }} />}
      
      {analysisResult && (
        <div>
          <h3>분석 결과: {analysisResult.category}</h3>
          <div style={{ width: '700px', height: '300px', margin: '0 auto' }}>
            <Bar 
              data={chartData}
              options={{
                scales: {
                  y: {
                    beginAtZero: false,
                    min: 1,
                    max: 5,
                    ticks: {
                      stepSize: 0.5,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
