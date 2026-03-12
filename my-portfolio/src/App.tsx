import { Carousel } from 'antd';

function App() {

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: '#fff',
  lineHeight: '100vh',
  textAlign: 'center',
  background: '#364d79',
};
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div>
     <Carousel afterChange={onChange} arrows>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    </div>
  )
}

export default App