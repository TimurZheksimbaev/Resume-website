import './Certificates.css'
import { useTranslation } from '../hooks/useTranslation'
import yandexCertificate from '../assets/certificates/yandex.jpg'
import goalgoCertificate from '../assets/certificates/goalgo.png'
import mtstruetechCertificate from '../assets/certificates/mtstruetech.jpg'
import tulahackCertificate from '../assets/certificates/tulahack.jpg'

const Certificates = () => {
  const { t } = useTranslation()

  const certificates = [
    yandexCertificate,
    mtstruetechCertificate,
    goalgoCertificate,
    tulahackCertificate
  ]

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">05.</span>
          {t.certificates.title}
        </h2>
        <div className="certificates-content">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-item">
              <img 
                src={cert} 
                alt={`Certificate ${index + 1}`}
                className="certificate-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates