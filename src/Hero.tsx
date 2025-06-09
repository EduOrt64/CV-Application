import { useNavigate } from "react-router-dom";
import { Button } from "./components";

export function Hero(){

  const navigate = useNavigate();
  const handleClick = () => {

    navigate("/cv");
  }

    return (
     <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(heroPic.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
      <p className="mb-5">
        Let’s craft a CV that truly showcases your skills and helps you shine in your job search.
      </p>
      
      <Button className="btn btn-primary" onClick={handleClick} >Get Started</Button>
    </div>
  </div>
</div>

    )

    
}