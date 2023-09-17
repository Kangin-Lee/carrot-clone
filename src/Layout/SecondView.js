import React from 'react'
import { Container } from 'react-bootstrap'

const SecondView = () => {
  return (
    <div className='secondView-area'>
      <Container>
        <div className='secondView'>
            <div>
                <img width={655} src='images/secondViewImg.webp'/>
            </div>
            <div>
                <div className='secondView-text1'>중고거래</div>
                <div className='secondView-text2'>믿을만한<br/>이웃 간 중고거래</div>
                <div className='secondView-text3'>동네 주민들과 가깝고 따뜻한 거래를<br/>지금 경험해보세요.</div>
                <div className='secondView-btns'>
                    <div>인기 매물 보기</div>
                    <div>믿을 수 있는 중고거래</div>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default SecondView
