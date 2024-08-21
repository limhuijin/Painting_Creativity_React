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

      // 서버로 이미지 업로드 요청
      axios.post('b20/upload/', formData)
        .then(response => {
          console.log('Server response:', response.data);
          setImageURL(response.data.file_url);  // 서버에서 받은 이미지 URL을 설정
          setSelectedImage(URL.createObjectURL(file));  // 로컬에서 미리보기 위해 이미지 URL 업데이트
          setIsModalOpen(false);  // 모달 창 닫기
        })
        .catch(error => {
          console.error('Upload error:', error);
          if (error.response) {
            console.error('Upload failed with status:', error.response.status);
            console.error('Error details:', error.response.data);
            alert(`업로드에 실패했습니다: ${error.response.data.error}`);
          } else if (error.request) {
            console.error('No response received:', error.request);
            alert('서버로부터 응답을 받지 못했습니다.');
          } else {
            console.error('Error setting up the request:', error.message);
            alert('요청 중 오류가 발생했습니다.');
          }
        });
    }
  };

  // "해석 시작" 버튼이 눌렸을 때 호출되는 함수
  const handleStartAnalysis = () => {
    if (imageURL) {
      axios.get(`b20/analyze/?image=${encodeURIComponent(imageURL)}`, {
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
                    beginAtZero: true,
                    min: 0,
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
