import { useState } from "react";
import './App.css';

export default function App() {
  const [level, setLevel] = useState(0);

  // ฟังก์ชันสำหรับเพิ่มค่า level
  const increaseLevel = (increment) => {
    setLevel(level + increment);
  };

  // เปลี่ยนรูปหมูเด้งตามระดับ level
  const getMooDeangImage = () => {
    if (level >= 40) {
      return "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/459469173_1053365443241271_5525651547572178294_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEC4dFo6zWL3go5ZHCEzMfnfr69TjN9l_9-vr1OM32X_6tSodc6NCn4U14ETRUSzmDcA2sI3IxXK9P0l0ut6fOT&_nc_ohc=Z1USpwSQAnEQ7kNvgHdHOSl&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=An2Fks-dGETiZhuDg2dvXoS&oh=00_AYCCfZgu315R3vWLOvj7aq9KkxRT-Zavqk3J6wGQlI3bHw&oe=66E9CBB5";  // รูปหมูเด้งสำหรับ level 40 ขึ้นไป
    } else if (level >= 20) {
      return "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/459010179_1017009243501213_6434257540434269195_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJmq29_Vi80sJpOm0e-Q6hkGPmaKaqMYSQY-ZopqoxhCz1_duLGqWQKs7CX8fNFYpjkxjQslOLz-bskNcLtAUc&_nc_ohc=kQfDkNgJDZYQ7kNvgE2B4XF&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=AF1I5lSspSlJYnch4_EcebS&oh=00_AYBhwddBMbee3TTOWxhohpVqWgH1pyGLstQIB_BDeDfPGg&oe=66E9C694";
    } else if (level > 100) {
      return "https://scontent-atl3-2.xx.fbcdn.net/v/t1.15752-9/440571144_320373880866677_6861662418687048014_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFoO_p6uK1afckYAkFB3Xc6jgNW98CHSvGOA1b3wIdK8T6q3f7N71OEAzEC9fzub_YI3dS5uHxn50BOFTdonbly&_nc_ohc=IlNOc-rHfkQQ7kNvgEeGrMB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-atl3-2.xx&_nc_gid=A7Hq0DvZCAn9oQpynUhMgZ2&oh=03_Q7cD1QEWVrm6HrRfLc1QfrswZWEQBuvvWNagZ9lqbICWhyOljA&oe=670B9BF3";  // รูปหมูเด้งสำหรับ level 20-39
    } else {
      return "https://img.pptvhd36.com/thumbor/2024/09/12/news-5f16196.webp";  // รูปหมูเด้งเริ่มต้น
    }
  };

  return (
    <>
      <h1>Level: {level}</h1>

      {/* เปลี่ยนรูปหมูเด้งทุก 20 level */}
      <div className="moo-deang">
        <img 
          src={getMooDeangImage()} 
          alt="หมูเด้ง" 
          onClick={() => increaseLevel(1)}  // เพิ่มทีละ 1
        />
      </div>

      <div className="other-images">
        {/* แตงโมเพิ่มทีละ 10 */}
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwa-pgF8RnD9CVF8Sqn_4zpxwLh1lJwDPlEw&s" 
          alt="แตงโม"
          onClick={() => increaseLevel(5)}  // เพิ่มทีละ 10
        />

        {/* ฟักทองเพิ่มทีละ 10 */}
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9XgMmoSBkuyTVrGDIQFuVwmu_E1mWU7vbQ&s" 
          alt="ฟักทอง"
          onClick={() => increaseLevel(10)}  // เพิ่มทีละ 10
        />

        {/* หญ้าเพิ่มทีละ 10 */}
        <img 
          src="https://static.trueplookpanya.com/cmsblog/183/72183/thumb_file.jpg" 
          alt="หญ้า"
          onClick={() => increaseLevel(20)}  // เพิ่มทีละ 10
        />
      </div>
    </>
  );
}
