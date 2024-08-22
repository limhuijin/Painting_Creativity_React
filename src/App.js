import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageURL, setImageURL] = useState(null); // 서버로부터 받은 이미지 URL 저장
  const [analysisResult, setAnalysisResult] = useState(null); // 분석 결과 저장

  // 이미지가 업로드될 때 호출되는 함수
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      // 파일이 FormData에 제대로 추가되었는지 확인
      if (!formData.get('file')) {
        alert('파일이 FormData에 제대로 추가되지 않았습니다. 다시 시도해 주세요.');
        return;
      }
  
      // 서버로 이미지 업로드 요청
      axios.post('https://a236-106-255-245-242.ngrok-free.app/upload/', formData)
        .then(response => {
          setImageURL(response.data.file_url);  // 서버에서 받은 이미지 URL을 설정
          setSelectedImage(URL.createObjectURL(file));  // 로컬에서 미리보기 위해 이미지 URL 업데이트
          setIsModalOpen(false);  // 모달 창 닫기
        })
        .catch(error => {
          console.error('Upload error:', error);
          
          if (error.response) {
            // 서버가 응답했으나 2xx 범위 외의 상태 코드
            alert(`업로드에 실패했습니다: ${error.response.data.error}\n상태 코드: ${error.response.status}\n응답 데이터: ${JSON.stringify(error.response.data)}`);
          } else if (error.request) {
            // 요청이 이루어졌으나 서버로부터 응답이 없을 경우
            alert(`서버로부터 응답을 받지 못했습니다.\nXMLHttpRequest 객체: [object XMLHttpRequest]\n요청 데이터: ${file.name || '파일 이름을 알 수 없습니다'}`);
          } else {
            // 요청 설정 중에 발생한 오류
            alert(`요청 중 오류가 발생했습니다.\n오류 메시지: ${error.message}`);
          }
        });
    } else {
      alert('파일이 선택되지 않았습니다. 파일을 선택해 주세요.');
    }
  };
  

  // "해석 시작" 버튼이 눌렸을 때 호출되는 함수
  const handleStartAnalysis = () => {
    if (imageURL) {
      axios.get(`https://a236-106-255-245-242.ngrok-free.app/analyze/?image=${encodeURIComponent(imageURL)}`, {
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        }
      })
      .then(response => {
        setAnalysisResult(response.data);
      })
      .catch(error => console.error('Analysis error:', error));
    } else {
      alert('먼저 이미지를 업로드해주세요.');
    }
  };  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const chartData = {
    labels: ['Delicate', 'Storytelling', 'Diversity of Objects', 'Utilize space', 'Expressive'],
    datasets: [
      {
        label: 'Prediction Scores',
        data: analysisResult ? analysisResult.predictions : [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={styles.container}>
      <UploadButton openModal={openModal} />
      <br /><br />
      
      <AnalysisButton handleStartAnalysis={handleStartAnalysis} />
      <br /><br />
      
      {selectedImage && <UploadedImage imageUrl={selectedImage} />}
      
      {isModalOpen && <ImageUploadModal closeModal={closeModal} handleImageUpload={handleImageUpload} />}
      
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
}

const UploadButton = ({ openModal }) => (
  <button onClick={openModal} style={styles.uploadButton}>
    사진 업로드
  </button>
);

const AnalysisButton = ({ handleStartAnalysis }) => (
  <button onClick={handleStartAnalysis} style={styles.analysisButton}>
    해석 시작
  </button>
);

const UploadedImage = ({ imageUrl }) => (
  <img src={imageUrl} alt="Uploaded" style={styles.image} />
);

const ImageUploadModal = ({ closeModal, handleImageUpload }) => (
  <div style={styles.modalOverlay}>
    <div style={styles.modalContent}>
      <h2 style={styles.modalTitle}>이미지 선택</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br /><br />
      <button onClick={closeModal} style={styles.closeButton}>
        닫기
      </button>
    </div>
  </div>
);

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  uploadButton: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  analysisButton: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  image: {
    width: '300px',
    height: 'auto',
    marginTop: '20px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px 20px',
  },
};

export default App;
