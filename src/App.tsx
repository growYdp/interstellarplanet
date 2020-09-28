import React from 'react';
import Button, {ButtonType, ButtonSize, ButtonRadius} from './components/Button/button'
import Alert from './components/Alert/alert'

function App() {
  const a = () => {
    alert('aaa')
  }
  return (
    <div className="App">
      <Button>测试</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large} onClick={a} radius={ButtonRadius.Mini}>测试尺寸</Button>
      <Button size={ButtonSize.Small} radius={ButtonRadius.Large}>测试尺寸</Button>
      <Button disabled={true} btnType={ButtonType.Primary}  radius={ButtonRadius.Small}>Primary</Button>
      <Button disabled={true} btnType={ButtonType.Link} href="www.baidu.com" >链接</Button>
      <Button btnType={ButtonType.Link} href="http://baidu.com" target="_blank">百度</Button>
      <Alert />
    </div>
  );
}

export default App;
