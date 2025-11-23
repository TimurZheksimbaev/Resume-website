import { useState, useRef, useEffect } from 'react'
import './ProjectImageSlider.css'

const ProjectImageSlider = ({ photos, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const sliderRef = useRef(null)

  if (!photos || photos.length === 0) {
    return null
  }

  // Если только одно фото, показываем без слайдера
  if (photos.length === 1) {
    return (
      <div className="project-image-wrapper">
        <img 
          src={photos[0]} 
          alt={title}
          className="project-image"
        />
      </div>
    )
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Минимальная дистанция для свайпа
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  return (
    <div className="project-image-wrapper">
      <div 
        className="image-slider"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={sliderRef}
      >
        <div 
          className="slider-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <div key={index} className="slide">
              <img 
                src={photo} 
                alt={`${title} - изображение ${index + 1}`}
                className="project-image"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          className="slider-arrow slider-arrow-left"
          onClick={goToPrevious}
          aria-label="Предыдущее изображение"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button 
          className="slider-arrow slider-arrow-right"
          onClick={goToNext}
          aria-label="Следующее изображение"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Перейти к изображению ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectImageSlider

