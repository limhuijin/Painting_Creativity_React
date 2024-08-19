import React, { useState } from 'react';

function App() {
  // 이미지 파일이 선택되었는지 여부와 선택된 이미지의 URL을 저장하는 상태 변수
  const [selectedImage, setSelectedImage] = useState(null);
  
  // 모달 창이 열려 있는지 여부를 관리하는 상태 변수
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 이미지가 업로드될 때 호출되는 함수
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // 사용자가 선택한 파일을 가져옴
    if (file) {
      const imageUrl = URL.createObjectURL(file); // 파일의 URL을 생성
      setSelectedImage(imageUrl); // 생성된 URL을 상태 변수에 저장
      setIsModalOpen(false);  // 이미지를 선택한 후 모달 창을 닫음
    }
  };

  // "해석 시작" 버튼이 눌렸을 때 호출되는 함수
  const handleStartAnalysis = () => {
    if (!selectedImage) {
      // 이미지가 선택되지 않았을 경우 경고 메시지를 표시
      alert('사진을 업로드해 주세요.');
    } else {
      // 이미지를 업로드한 경우 콘솔에 메시지를 출력
      console.log('해석을 시작합니다...');
    }
  };

  // 모달 창을 여는 함수
  const openModal = () => setIsModalOpen(true);
  
  // 모달 창을 닫는 함수
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={styles.container}>
      {/* 사진 업로드 버튼: 클릭 시 모달 창이 열림 */}
      <UploadButton openModal={openModal} />
      <br /><br />
      
      {/* 해석 시작 버튼: 클릭 시 이미지가 선택되었는지 확인 */}
      <AnalysisButton handleStartAnalysis={handleStartAnalysis} />
      <br /><br />
      
      {/* 사용자가 이미지를 선택한 경우 화면에 이미지를 표시 */}
      {selectedImage && <UploadedImage imageUrl={selectedImage} />}
      
      {/* 모달 창이 열려 있을 때만 모달 창을 화면에 표시 */}
      {isModalOpen && <ImageUploadModal closeModal={closeModal} handleImageUpload={handleImageUpload} />}
    </div>
  );
}

// 사진 업로드 버튼 컴포넌트
const UploadButton = ({ openModal }) => (
  <button onClick={openModal} style={styles.uploadButton}>
    사진 업로드
  </button>
);

// 해석 시작 버튼 컴포넌트
const AnalysisButton = ({ handleStartAnalysis }) => (
  <button onClick={handleStartAnalysis} style={styles.analysisButton}>
    해석 시작
  </button>
);

// 업로드된 이미지를 화면에 표시하는 컴포넌트
const UploadedImage = ({ imageUrl }) => (
  <img src={imageUrl} alt="Uploaded" style={styles.image} />
);

// 이미지 업로드를 위한 모달 창 컴포넌트
const ImageUploadModal = ({ closeModal, handleImageUpload }) => (
  <div style={styles.modalOverlay}>
    <div style={styles.modalContent}>
      <h2 style={styles.modalTitle}>이미지 선택</h2>
      
      {/* 파일 선택 input: 이미지 파일만 선택 가능 */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br /><br />
      
      {/* 모달 창 닫기 버튼 */}
      <button onClick={closeModal} style={styles.closeButton}>
        닫기
      </button>
    </div>
  </div>
);

// 스타일 객체를 정의해 재사용 가능하도록 함
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
