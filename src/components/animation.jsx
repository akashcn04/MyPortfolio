const AnimatedGif = () => {
    return (
      <div className="flex flex-col justify-center items-center h-auto pr-12">
        <div>
        <img
          src="src/assets/arrow.gif" // You can replace this URL with your own GIF
          alt="Loading Animation"
          className="w-64 h-30 rounded-lg"
          />
        </div>
        <div className="pt-9 pl-[50px]">
          <a href="https://drive.google.com/file/d/1Tdh9eRRIdqVvfIXmqxO0PystwVAWYtcf/view?usp=drive_link"><img src="src/assets/link.png" alt="" className="w-[30px] ml-6"/> </a>
          <p>
            MY RESUME
          </p>
        </div>
      </div>
    );
  };
  
  export default AnimatedGif;