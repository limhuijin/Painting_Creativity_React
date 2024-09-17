import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function GetStartedEvent() {
  const [selectedImage, setSelectedImage] = useState(null);  // 선택된 이미지의 로컬 미리보기 URL
  const [imageURL, setImageURL] = useState(null);  // 서버에 업로드된 이미지 URL
  const [analysisResult, setAnalysisResult] = useState(null);  // 분석 결과 저장

  // 이미지 업로드 함수
  const handleImageUpload = (event) => {
    const file = event.target.files[0];  // 업로드한 파일을 가져옴
    if (file) {
      const formData = new FormData();
      formData.append('file', file);  // FormData에 파일 추가
  
      // 서버에 이미지 업로드 요청
      axios.post('https://a236-106-255-245-242.ngrok-free.app/upload/', formData)
        .then(response => {
          setImageURL(response.data.file_url);  // 서버에서 반환된 이미지 URL 저장
          setSelectedImage(URL.createObjectURL(file));  // 로컬에서 미리보기 URL 설정
        })
        .catch(error => console.error('Upload error:', error));
    } else {
      alert('파일이 선택되지 않았습니다.');
    }
  };

  // 이미지 분석 함수
  const handleStartAnalysis = () => {
    if (imageURL) {
      // 서버에 이미지 분석 요청
      axios.get(`https://a236-106-255-245-242.ngrok-free.app/analyze/?image=${encodeURIComponent(imageURL)}`)
        .then(response => {
          setAnalysisResult(response.data);  // 분석 결과 저장
        })
        .catch(error => console.error('Analysis error:', error));
    } else {
      alert('먼저 이미지를 업로드해주세요.');
    }
  };

  // 분석 결과 차트 데이터 설정
  const chartData = {
    labels: ['Delicate', 'Storytelling', 'Diversity of Objects', 'Utilize space', 'Expressive'],
    datasets: [
      {
        label: 'Prediction Scores',
        data: analysisResult ? analysisResult.predictions : [],  // 분석 결과 데이터
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input type="file" accept="image/*" onChange={handleImageUpload} />  {/* 이미지 파일 선택 */}
      <br /><br />
      <button onClick={handleStartAnalysis}>해석 시작</button>  {/* 분석 시작 버튼 */}
      
      {/* 선택된 이미지 미리보기 */}
      {selectedImage && <img src={selectedImage} alt="Uploaded" style={{ width: '300px', marginTop: '20px' }} />}
      
      {/* 분석 결과가 있을 때 차트 표시 */}
      {analysisResult && (
        <div>
          <h3>분석 결과: {analysisResult.category}</h3>
          <div style={{ width: '700px', height: '300px', margin: '0 auto' }}>
            <Bar 
              data={chartData}  // 차트 데이터
              options={{
                scales: {
                  y: {
                    beginAtZero: false,  // y축의 시작을 0이 아닌 데이터의 최소값으로 설정
                    min: 1,  // 최소값 설정
                    max: 5,  // 최대값 설정
                    ticks: {
                      stepSize: 0.5,  // 눈금 간격 설정
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
}

export default GetStartedEvent;
