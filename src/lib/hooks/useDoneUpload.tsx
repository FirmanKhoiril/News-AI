type Color = {
    className?: string

}
const UseDoneUpload = ({className}: Color) => {
  return (
    <div>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.625 6.25L7.3831 7.56858C7.80158 7.88243 8.39122 7.82075 8.73568 7.42708L12.5 3.125" className={className} strokeWidth="2" strokeLinecap="round"/>
        <path d="M13.125 7.5C13.125 8.67531 12.7569 9.82109 12.0723 10.7764C11.3877 11.7318 10.421 12.4487 9.3081 12.8265C8.19516 13.2043 6.99185 13.224 5.86715 12.8828C4.74245 12.5416 3.75287 11.8567 3.03739 10.9243C2.32191 9.99185 1.91647 8.85872 1.87801 7.68404C1.83956 6.50937 2.17002 5.35215 2.82298 4.37492C3.47595 3.39769 4.41862 2.64953 5.51859 2.23553C6.61857 1.82153 7.8206 1.76248 8.95586 2.06667" className={className} strokeWidth="2" strokeLinecap="round"/>
            </svg> 
    </div>
  )
}

export default UseDoneUpload