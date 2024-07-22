function canvacode (){
    function locomotive() {
      gsap.registerPlugin(ScrollTrigger);
    
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true ,
      });
      locoScroll.on("scroll", ScrollTrigger.update);
    
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
    
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
    
        pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }
    locomotive();
    
    
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    
    function files(index) {
      var data = `
    
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_002.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_003.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_004.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_005.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_006.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_007.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_008.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_009.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_010.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_011.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_012.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_013.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_014.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_015.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_016.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_017.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_018.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_019.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_020.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_021.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_022.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_023.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_024.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_025.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_026.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_027.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_028.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_029.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_030.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_031.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_032.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_033.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_034.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_035.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_036.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_037.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_038.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_039.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_040.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_041.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_042.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_043.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_044.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_045.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_046.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_047.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_048.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_049.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_050.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_051.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_052.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_053.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_054.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_055.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_056.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_057.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_058.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_059.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_060.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_061.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_062.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_063.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_064.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_065.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_066.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_067.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_068.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_069.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_070.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_071.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_072.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_073.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_074.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_075.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_076.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_077.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_078.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_079.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_080.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_081.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_082.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_083.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_084.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_085.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_086.png
        
         
         
       
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_181.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_182.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_183.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_184.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_185.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_186.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_187.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_188.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_189.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_190.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_191.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_192.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_193.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_194.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_195.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_196.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_197.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_198.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_199.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_200.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_201.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_202.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_203.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_204.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_205.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_206.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_207.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_208.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_209.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_210.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_211.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_212.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_213.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_214.png
        
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_269.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_270.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_271.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_272.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_273.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_274.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_275.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_276.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_277.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_278.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_279.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_280.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_281.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_282.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_283.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_284.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_285.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_286.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_287.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_288.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_289.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_290.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_291.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_292.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_293.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_294.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_295.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_296.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_297.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_298.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_299.png
  
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_001.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_301.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_302.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_003.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_004.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_005.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_006.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_056.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_057.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_058.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_059.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_060.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_061.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_062.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_063.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_064.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_065.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_066.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_067.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_068.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_069.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_070.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_071.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_072.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_073.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_074.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_075.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_076.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_077.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_078.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_079.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_080.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_081.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_082.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_083.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_084.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_085.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_086.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_087.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_088.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_089.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_090.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_091.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_092.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_093.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_094.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_191.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_192.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_193.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_194.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_195.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_196.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_197.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_198.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_199.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_200.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_201.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_202.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_203.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_204.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_205.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_206.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_207.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_208.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_209.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_210.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_211.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_212.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_213.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_214.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_215.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_216.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_217.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_218.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_219.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_220.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_221.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_222.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_223.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_224.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_225.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_226.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_227.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_228.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_229.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_230.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_231.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_232.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_233.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_234.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_235.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_236.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_237.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_238.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_239.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_240.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_241.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_242.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_243.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_244.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_245.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_246.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_247.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_248.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_249.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_250.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_250.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_251.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_252.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_253.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_254.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_255.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_256.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_257.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_258.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_259.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_260.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_261.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_262.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_263.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_264.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_265.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_266.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_267.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_268.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_269.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_270.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_271.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_272.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_273.png
         
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_274.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_275.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_276.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_277.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_278.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_279.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_280.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_281.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_282.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_283.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_284.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_285.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_286.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_287.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_288.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_289.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_290.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_291.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_292.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_293.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_294.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_295.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_296.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_297.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_298.png
         ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_299.png
         
  
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_000.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_001.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_002.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_003.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_004.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_005.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_006.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_007.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_008.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_009.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_010.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_011.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_012.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_013.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_014.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_015.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_016.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_017.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_018.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_019.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_020.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_021.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_022.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_023.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_024.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_025.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_026.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_027.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_028.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_029.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_030.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_031.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_032.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_033.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_034.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_035.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_036.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_037.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_038.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_039.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_040.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_041.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_042.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_043.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_044.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_045.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_046.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_047.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_048.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_049.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_050.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_051.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_052.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_053.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_054.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_055.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_056.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_057.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_058.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_059.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_151.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_152.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_153.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_154.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_155.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_156.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_157.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_158.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_159.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_160.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_161.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_162.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_163.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_164.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_165.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_166.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_167.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_168.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_169.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_170.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_171.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_172.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_173.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_174.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_175.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_176.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_177.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_178.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_179.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_180.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_181.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_182.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_183.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_184.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_185.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_186.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_187.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_188.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_189.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_190.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_191.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_192.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_193.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_194.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_195.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_196.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_197.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_198.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_199.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_200.png 
          
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_201.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_202.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_203.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_204.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_205.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_206.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_207.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_208.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_209.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_210.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_211.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_212.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_213.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_214.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_215.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_216.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_217.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_218.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_219.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_220.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_221.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_222.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_223.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_224.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_225.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_226.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_227.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_228.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_229.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_230.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_231.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_232.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_233.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_234.png      
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_240.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_241.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_242.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_243.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_244.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_245.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_246.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_247.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_248.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_249.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_250.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_251.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_252.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_253.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_254.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_255.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_256.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_257.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_258.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_259.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_260.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_261.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_262.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_263.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_264.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_265.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_266.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_267.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_268.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_269.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_270.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_271.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_272.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_273.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_274.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_275.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_276.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_277.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_278.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_279.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_280.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_281.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_282.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_283.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_284.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_285.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_286.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_287.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_288.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_289.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_290.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_291.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_292.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_293.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_294.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_295.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_296.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_297.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_298.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_299.png       
          ./images/3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_300.png 
          
          
  
  
        
  
         
         
         
     `;
      return data.split("\n")[index];
    }
    
    const frameCount = 495;
    
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 4,
        trigger: `#page>canvas`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: "#page>canvas",
      pin: true,
      // markers:true,
      scroller: `#main`,
      start: `top top`,
      end: `600% top`,
    });
    
    
    
    gsap.to("#page1",{
      scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        end:`bottom top`,
        pin:true,
        scroller:`#main`
      }
    })
    gsap.to("#page2",{
      scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        end:`bottom top`,
        pin:true,
        scroller:`#main`
      }
    })
    gsap.to("#page3",{
      scrollTrigger:{
        trigger:`#page3`,
        start:`top top`,
        end:`bottom top`,
        pin:true,
        scroller:`#main`
      }
    })
  }
  
  canvacode()



  function modanbikes(){
    
    var madone = [
        { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSL7-25-46220-A-Primary",
            name:"Madone SL 7 Gen 8",
            price:"₹575,199",
            color:"Matte Lunar Silver"
        },
        { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSLR7-25-46687-B-Primary",
            name:"Madone SLR 7 Gen 8",
            price:"₹725,599",
            color:"Navy Smoke"
        },
        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSL6-25-46219-B-Primary",
            name:"Madone SL 6 Gen 8",
            price:"₹485,399",
            color:"Crimson"
        },
        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSL5-25-46218-B-Primary",
            name:"Madone SL 5 Gen 8",
            price:"₹324,999",
            color:"Hex Blue"
        },
        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR7_23_37025_A_Primary",
            name:"Madone SLR 7 Gen 7",
            price:"₹694,599",
            color:"Plasma Grey Pearl"
        },
        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSL7-24-41467-A-Primary",
            name:"Madone SL 7 Gen 7",
            price:"₹555,199",
            color:"Plasma Grey Pearl"
        },
        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSL6-24-41466-A-Primary",
            name:"Madone SL 6 Gen 7",
            price:"₹485,399",
            color:"Matte Carbon Smoke"
        },
        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLFrameset-24-44369-A-Primary",
            name:"Madone SL Disc Gen 7 Frame Set",
            price:"₹325,000",
            color:" Dark Carmine"
        },
        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLRDiscFrameset_23_37307_A_Primary",
            name:"Madone SLR Gen 7 Disc Frame Set",
            price:"₹276,937",
            color:" Deep Smoke Carbon"
        },
        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/MadoneSLR7eTap_23_37418_C_Primary",
            name:" Deep Smoke Carbon",
            price:"₹899,699",
            color:"Azure"
        }
    ];
    
    var products1 = document.querySelector("#products1");
    var container = "";
    
    madone.forEach(function(elem) {
        container += `
            <div class="product-container">
                <img src="${elem.image}" class="product1" alt="${elem.name}">
            </div>
        `;
    });
    products1.innerHTML = container;
    
    var currentIndex = 1;
    var images = document.querySelectorAll(".product1");
    
    function updateSlider1() {
    
        images.forEach((img, idx) => {
            gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
        });
    
        var prevIndex = (currentIndex - 1 + images.length) % images.length;
        var nextIndex = (currentIndex + 1) % images.length;
    
        gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
        gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
    
        gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "19%", width: "42vw", opacity: 1,ease: "circ.out" });
        gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
    
        gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
        gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
    
    
      
        document.querySelector("#name1").textContent = madone[currentIndex].name;
        document.querySelector(".details #color1 .btn").textContent = ` ${madone[currentIndex].color}`;
        document.querySelector(".details #price1 .price").textContent = madone[currentIndex].price;
    }
    
    updateSlider1();
    
    document.querySelector("#slider-arrow1.right").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider1();
    });
    
    document.querySelector("#slider-arrow1.left").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider1();
    });
    
    images.forEach(function(image, idx) {
    image.addEventListener("click", function() {
    if (idx === currentIndex) return;
    
    var prevIndex = (currentIndex - 1 + images.length) % images.length;
    var nextIndex = (currentIndex + 1) % images.length;
    
    if (idx === prevIndex) {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider1();
    } else if (idx === nextIndex) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider1();
    }
    });
    });
    }
    
    
    
    
    
    
    
    
    
    
    function emondabikes(){
        var emonda =[
            {
                image:"https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/EmondaALR5-24-41426-A-Primary",
                name:"Émonda ALR 5",
                price:"₹199,999",
                color:" Crimson to Dark Carmine Fade"
            },
            {
                image:"https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/EmondaSL6-24-41352-B-Primary",
                name:"Émonda SL 6",
                price:"₹417,199",
                color:" Plasma Pearl Grey/Purple Flip"
            },
            {
                image:"https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/EmondaSL5-24-41366-B-Primary",
                name:"Émonda SL 5",
                price:"₹254,599",
                color:"Navy Smoke/Dark Aquatic"
            },
            {
                image:"https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/EmondaALRDiscFrameset_23_37299_B_Primary",
                name:"Émonda ALR Disc Frame Set",
                price:"₹94,099",
                color:" Era White"
            },
            {
                image:"https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaSLR7eTap_23_33139_C_Primary",
                name:"Émonda SLR 7 AXS",
                price:"₹797,199",
                color:" Azure"
            },
            {
                image:"https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaSL6Pro_23_36977_A_Primary",
                name:"Émonda SL 6 Pro Di2",
                price:"₹360,199",
                color:"Dnister Black/Trek Black"
            },
            {
                image:"https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaSL5_23_36974_B_Primary",
                name:"Émonda SL 5",
                price:"₹252,079",
                color:" Hex Blue/Deep Dark Blue"
            },
            {
                image:"https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/EmondaALR5_23_36100_A_Primary",
                name:"Émonda ALR 5",
                price:"₹194,999",
                color:"Trek Black"
            },
        ]
    
        var products2 = document.querySelector("#products2");
        var container = "";
        
        emonda.forEach(function(elem) {
            container += `
                <div class="product-container">
                    <img src="${elem.image}" class="product2" alt="${elem.name}">
                </div>
            `;
        });
        products2.innerHTML = container;
        
        var currentIndex = 1;
        var images = document.querySelectorAll(".product2");
        
        function updateSlider2() {
        
            images.forEach((img, idx) => {
                gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
            });
        
            var prevIndex = (currentIndex - 1 + images.length) % images.length;
            var nextIndex = (currentIndex + 1) % images.length;
        
            gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw" });
            gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5 });
        
            gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "19%", width: "42vw", opacity: 1 });
            gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 });
        
            gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)" });
            gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 });
        
        
          
            document.querySelector("#name2").textContent = emonda[currentIndex].name;
            document.querySelector("#details2 #color2 .btn").textContent = `${emonda[currentIndex].color}`;
            document.querySelector("#details2 #price2  .price").textContent = emonda[currentIndex].price;
        }
        
        updateSlider2();
        
        document.querySelector("#slider-arrow2.right").addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider2();
        });
        
        document.querySelector("#slider-arrow2.left").addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider2();
        });
        
        images.forEach(function(image, idx) {
        image.addEventListener("click", function() {
        if (idx === currentIndex) return;
        
        var prevIndex = (currentIndex - 1 + images.length) % images.length;
        var nextIndex = (currentIndex + 1) % images.length;
        
        if (idx === prevIndex) {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider2();
        } else if (idx === nextIndex) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider2();
        }
        });
        });
        }
       
       
    
    
    
        function checkpointbikes(){
        
            var checkpoint = [
                { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/CheckpointSL5-24-41398-B-Primary",
                    name:"Checkpoint SL 5",
                    price:"₹294,499",
                    color:"Matte Pennyflake"
                },
                { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/CheckpointALR4-24-41513-A-Primary",
                    name:"Checkpoint ALR 4",
                    price:"₹161,599",
                    color:"Matte Galactic Grey"
                },
                { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/CheckpointALR5-24-41640-A-Primary",
                    name:"Checkpoint ALR 5",
                    price:"₹211,999",
                    color:" Matte Keswick"
                },
                
            ];
            
            var products3 = document.querySelector("#products3");
            var container = "";
            
            checkpoint.forEach(function(elem) {
                container += `
                    <div class="product-container">
                        <img src="${elem.image}" class="product3" alt="${elem.name}">
                    </div>
                `;
            });
            products3.innerHTML = container;
            
            var currentIndex = 1;
            var images = document.querySelectorAll(".product3");
            
            function updateSlider3() {
            
                images.forEach((img, idx) => {
                    gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
                });
            
                var prevIndex = (currentIndex - 1 + images.length) % images.length;
                var nextIndex = (currentIndex + 1) % images.length;
            
                gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
                gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
            
                gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "19%", width: "42vw", opacity: 1,ease: "circ.out" });
                gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
            
                gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
                gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
            
            
              
                document.querySelector("#name3").textContent = checkpoint[currentIndex].name;
                document.querySelector("#details3 #color3 .btn").textContent = ` ${checkpoint[currentIndex].color}`;
                document.querySelector("#details3 #price3 .price").textContent = checkpoint[currentIndex].price;
            }
            
            updateSlider3();
            
            document.querySelector("#slider-arrow3.right").addEventListener("click", function() {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateSlider3();
            });
            
            document.querySelector("#slider-arrow3.left").addEventListener("click", function() {
                currentIndex = (currentIndex + 1) % images.length;
                updateSlider3();
            });
            
            images.forEach(function(image, idx) {
            image.addEventListener("click", function() {
            if (idx === currentIndex) return;
            
            var prevIndex = (currentIndex - 1 + images.length) % images.length;
            var nextIndex = (currentIndex + 1) % images.length;
            
            if (idx === prevIndex) {
                currentIndex = (currentIndex + 1) % images.length;
                updateSlider3();
            } else if (idx === nextIndex) {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateSlider3();
            }
            });
            });
            }
            checkpointbikes()
    
            
    
    
    
        function domanebikes(){
        
                var domane = [
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL4-24-41607-B-Primary",
                        name:"Domane AL 4 Gen 4",
                        price:"₹149,899",
                        color:"Viper Red"
                    },
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FuelEX5-24-41346-B-Primary",
                        name:"Fuel EX 5 Gen 6",
                        price:"₹270,199",
                        color:"Matte Blue Sage"
                    },
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL5-24-41395-A-Primary",
                        name:"Domane AL 5 Gen 4",
                        price:"₹186,899",
                        color:" Matte Trek Black"
                    },
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL2-24-41587-C-Primary",
                        name:"Domane AL 2 Gen 4",
                        price:"₹99,699",
                        color:" Crimson to Dark Carmine Fade"
                    },
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneSL6_23_36746_B_Primary",
                        name:"Domane SL 6 Gen 4",
                        price:"₹424,199",
                        color:" Matte Trek Black"
                    },
                    { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneAL2_21_33037_A_Primary",
                        name:"Domane AL 2 Rim",
                        price:"₹71,199",
                        color:" Matte Trek Black"
                    },
                    
                ];
                
                var products4 = document.querySelector("#products4");
                var container = "";
                
                domane.forEach(function(elem) {
                    container += `
                        <div class="product-container">
                            <img src="${elem.image}" class="product4" alt="${elem.name}">
                        </div>
                    `;
                });
                products4.innerHTML = container;
                
                var currentIndex = 1;
                var images = document.querySelectorAll(".product4");
                
                function updateSlider4() {
                
                    images.forEach((img, idx) => {
                        gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
                    });
                
                    var prevIndex = (currentIndex - 1 + images.length) % images.length;
                    var nextIndex = (currentIndex + 1) % images.length;
                
                    gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
                    gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
                
                    gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "19%", width: "42vw", opacity: 1,ease: "circ.out" });
                    gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
                
                    gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
                    gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
                
                
                  
                    document.querySelector("#name4").textContent = domane[currentIndex].name;
                    document.querySelector("#details4 #color4 .btn").textContent = ` ${domane[currentIndex].color}`;
                    document.querySelector("#details4 #price4 .price").textContent = domane[currentIndex].price;
                }
                
                updateSlider4();
                
                document.querySelector("#slider-arrow4.right").addEventListener("click", function() {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updateSlider4();
                });
                
                document.querySelector("#slider-arrow4.left").addEventListener("click", function() {
                    currentIndex = (currentIndex + 1) % images.length;
                    updateSlider4();
                });
                
                images.forEach(function(image, idx) {
                image.addEventListener("click", function() {
                if (idx === currentIndex) return;
                
                var prevIndex = (currentIndex - 1 + images.length) % images.length;
                var nextIndex = (currentIndex + 1) % images.length;
                
                if (idx === prevIndex) {
                    currentIndex = (currentIndex + 1) % images.length;
                    updateSlider4();
                } else if (idx === nextIndex) {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updateSlider4();
                }
                });
                });
                }
            
    
    
    
        function dualsportbikes(){
        
                 var dualsport = [
                    { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/DualSport3-24-40826-B-Primary",
                            name:"Dual Sport 3 Gen 5",
                            price:"₹79,990",
                            color:"Pennyflake"
                        },
                        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport2-24-40824-A-Primary",
                            name:"Dual Sport 2 Gen 5",
                            price:"₹61,199",
                            color:"Lithium Grey"
                        },
                        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport3_23_36826_A_Primary",
                            name:"Dual Sport 3 Gen 5",
                            price:"₹72,799",
                            color:" MBlack Olive"
                        },
                        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport2_23_36823_A_Primary",
                            name:"Dual Sport 2 Gen 5",
                            price:"₹52,199",
                            color:" Sale color / Galactic Grey"
                        },
                        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport1_23_36824_A_Primary",
                            name:"Dual Sport 1 Gen 5",
                            price:"₹49,999",
                            color:"Sale color / Mercury"
                        },
                        { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/DualSport1_22_35060_A_Primary",
                            name:"Dual Sport 1 Gen 4",
                            price:"₹46,099",
                            color:"Sale color / Lithium Grey"
                        },
                        
                    ];
                    
                    var products5 = document.querySelector("#products5");
                    var container = "";
                    
                   dualsport.forEach(function(elem) {
                        container += `
                            <div class="product-container">
                                <img src="${elem.image}" class="product5" alt="${elem.name}">
                            </div>
                        `;
                    });
                    products5.innerHTML = container;
                    
                    var currentIndex = 1;
                    var images = document.querySelectorAll(".product5");
                    
                    function updateSlider5() {
                    
                        images.forEach((img, idx) => {
                            gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
                        });
                    
                        var prevIndex = (currentIndex - 1 + images.length) % images.length;
                        var nextIndex = (currentIndex + 1) % images.length;
                    
                        gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
                        gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
                    
                        gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
                        gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
                    
                        gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
                        gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
                    
                    
                      
                        document.querySelector("#name5").textContent = dualsport[currentIndex].name;
                        document.querySelector("#details5 #color5 .btn").textContent = ` ${dualsport[currentIndex].color}`;
                        document.querySelector("#details5 #price5 .price").textContent = dualsport[currentIndex].price;
                    }
                    
                    updateSlider5();
                    
                    document.querySelector("#slider-arrow5.right").addEventListener("click", function() {
                        currentIndex = (currentIndex - 1 + images.length) % images.length;
                        updateSlider5();
                    });
                    
                    document.querySelector("#slider-arrow5.left").addEventListener("click", function() {
                        currentIndex = (currentIndex + 1) % images.length;
                        updateSlider5();
                    });
                    
                    images.forEach(function(image, idx) {
                    image.addEventListener("click", function() {
                    if (idx === currentIndex) return;
                    
                    var prevIndex = (currentIndex - 1 + images.length) % images.length;
                    var nextIndex = (currentIndex + 1) % images.length;
                    
                    if (idx === prevIndex) {
                        currentIndex = (currentIndex + 1) % images.length;
                        updateSlider5();
                    } else if (idx === nextIndex) {
                        currentIndex = (currentIndex - 1 + images.length) % images.length;
                        updateSlider5();
                    }
                    });
                    });
            }
        
    
    
    
       
    
    
    
    function fxbikes(){
        
        var fx = [
           { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/FX3-24-40819-C-Primary",
                   name:"FX 3 Gen 4",
                   price:"₹79,990",
                   color:"Pennyflake"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FX2-24-40815-A-Primary",
                   name:"FX 2 Gen 4",
                   price:"₹59,999",
                   color:"Matte Trek Black"
               },
               { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/FXSport4Carbon-24-40822-B-Primary",
                   name:"FX Sport 4",
                   price:"₹156,499",
                   color:" DARK AQUATIC"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FX1-24-40813-A-Primary",
                   name:"FX 1 Gen 4",
                   price:"₹51,599",
                   color:"  Dnister Black"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FXSport6Carbon_22_35787_A_Primary",
                   name:"FX Sport 6",
                   price:"₹49,999",
                   color:"Sale color / Mercury"
               },
               { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/FXSport5Carbon_22_35786_A_Primary",
                   name:"FX Sport 5",
                   price:"₹180,399",
                   color:"NAVY CARBON SMOKE"
               },
               
           ];
           
           var products6 = document.querySelector("#products6");
           var container = "";
           
          fx.forEach(function(elem) {
               container += `
                   <div class="product-container">
                       <img src="${elem.image}" class="product6" alt="${elem.name}">
                   </div>
               `;
           });
           products6.innerHTML = container;
           
           var currentIndex = 1;
           var images = document.querySelectorAll(".product6");
           
           function updateSlider6() {
           
               images.forEach((img, idx) => {
                   gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
               });
           
               var prevIndex = (currentIndex - 1 + images.length) % images.length;
               var nextIndex = (currentIndex + 1) % images.length;
           
               gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
               gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
           
               gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
               gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
           
               gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
               gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
           
           
             
               document.querySelector("#name6").textContent = fx[currentIndex].name;
               document.querySelector("#details6 #color6 .btn").textContent = ` ${fx[currentIndex].color}`;
               document.querySelector("#details6 #price6 .price").textContent = fx[currentIndex].price;
           }
           
           updateSlider6();
           
           document.querySelector("#slider-arrow6.right").addEventListener("click", function() {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider6();
           });
           
           document.querySelector("#slider-arrow6.left").addEventListener("click", function() {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider6();
           });
           
           images.forEach(function(image, idx) {
           image.addEventListener("click", function() {
           if (idx === currentIndex) return;
           
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
           
           if (idx === prevIndex) {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider6();
           } else if (idx === nextIndex) {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider6();
           }
           });
           });
    }
    
    
    
    
    function fuelex(){
        
        var fx = [
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/FuelEX5-24-41346-B-Primary",
                   name:"Fuel EX Gen 6",
                   price:"₹270,199",
                   color:"Matte Blue Sage"
               },  
           ];
           
           var products7 = document.querySelector("#products7");
           var container = "";
           
          fx.forEach(function(elem) {
               container += `
                   <div class="product-container">
                       <img src="${elem.image}" class="product7" alt="${elem.name}">
                   </div>
               `;
           });
           products7.innerHTML = container;             
    }
    
    
    
    function marlinbikes(){
        
        var marlin = [
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin5-24-40773-A-Primary",
                   name:"Marlin 5 Gen 3",
                   price:"₹61,399",
                   color:"Matte Dnister Black"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin4-24-41613-C-Primary",
                   name:"Marlin 4 Gen 2",
                   price:"₹35,999",
                   color:"Matte Trek Black"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin6_23_36966_B_Primary",
                   name:"Marlin 6 Gen 3",
                   price:"₹69,199",
                   color:" DARK AQUATIC"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin8_21_34649_B_Primary",
                   name:"Marlin 8 Gen 2",
                   price:"₹99,199",
                   color:" Nautical"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin7_23_36967_A_Primary",
                   name:"Marlin 7 Gen 3",
                   price:"₹90,399",
                   color:"Sale color"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Marlin5_22_34587_A_Primary",
                   name:"Marlin 5 Gen 2",
                   price:"₹53,699",
                   color:"Lithium Grey"
               },
               
           ];
           
           var products8 = document.querySelector("#products8");
           var container = "";
           
          marlin.forEach(function(elem) {
               container += `
                   <div class="product-container">
                       <img src="${elem.image}" class="product8" alt="${elem.name}">
                   </div>
               `;
           });
           products8.innerHTML = container;
           
           var currentIndex = 1;
           var images = document.querySelectorAll(".product8");
           
           function updateSlider8() {
           
               images.forEach((img, idx) => {
                   gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
               });
           
               var prevIndex = (currentIndex - 1 + images.length) % images.length;
               var nextIndex = (currentIndex + 1) % images.length;
           
               gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
               gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
           
               gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
               gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
           
               gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
               gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
           
           
             
               document.querySelector("#name8").textContent = marlin[currentIndex].name;
               document.querySelector("#details8 #color8 .btn").textContent = ` ${marlin[currentIndex].color}`;
               document.querySelector("#details8 #price8 .price").textContent = marlin[currentIndex].price;
           }
           
           updateSlider8();
           
           document.querySelector("#slider-arrow8.right").addEventListener("click", function() {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider8();
           });
           
           document.querySelector("#slider-arrow8.left").addEventListener("click", function() {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider8();
           });
           
           images.forEach(function(image, idx) {
           image.addEventListener("click", function() {
           if (idx === currentIndex) return;
           
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
           
           if (idx === prevIndex) {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider8();
           } else if (idx === nextIndex) {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider8();
           }
           });
           });
    }
    
    
    
    
    function Procaliberbikes(){
        
        var procaliber = [
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Procaliber97AXS-24-41643-A-Primary",
                   name:"Procaliber 9.7",
                   price:"₹441,499",
                   color:"White Prismatic"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Procaliber95-24-33258-A-Primary",
                   name:"Procaliber 9.6",
                   price:"₹229,199",
                   color:"Deep Smok"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Procaliber96_23_35113_B_Primary",
                   name:"Procaliber 9.5",
                   price:"₹189,299",
                   color:" Matte Trek Black"
               },
               
               
           ];
           
           var products9 = document.querySelector("#products9");
           var container = "";
           
         procaliber.forEach(function(elem) {
               container += `
                   <div class="product-container">
                       <img src="${elem.image}" class="product9" alt="${elem.name}">
                   </div>
               `;
           });
           products9.innerHTML = container;
           
           var currentIndex = 1;
           var images = document.querySelectorAll(".product9");
           
           function updateSlider9() {
           
               images.forEach((img, idx) => {
                   gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
               });
           
               var prevIndex = (currentIndex - 1 + images.length) % images.length;
               var nextIndex = (currentIndex + 1) % images.length;
           
               gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
               gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
           
               gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
               gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
           
               gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
               gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
           
           
             
               document.querySelector("#name9").textContent =procaliber[currentIndex].name;
               document.querySelector("#details9 #color9 .btn").textContent = ` ${procaliber[currentIndex].color}`;
               document.querySelector("#details9 #price9 .price").textContent =procaliber[currentIndex].price;
           }
           
           updateSlider9();
           
           document.querySelector("#slider-arrow9.right").addEventListener("click", function() {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider9();
           });
           
           document.querySelector("#slider-arrow9.left").addEventListener("click", function() {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider9();
           });
           
           images.forEach(function(image, idx) {
           image.addEventListener("click", function() {
           if (idx === currentIndex) return;
           
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
           
           if (idx === prevIndex) {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider9();
           } else if (idx === nextIndex) {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider9();
           }
           });
           });
    }
    
    
    
    function roscuebikes(){
        
        var roscoe = [
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Roscoe6_22_33192_C_Primary",
                   name:"Roscoe 6",
                   price:"₹77,899",
                   color:"Waterloo Blue"
               },  
           ];
           
           var products10 = document.querySelector("#products10");
           var container = "";
           
          roscoe.forEach(function(elem) {
               container += `
                   <div class="product-container">
                       <img src="${elem.image}" class="product10" alt="${elem.name}">
                   </div>
               `;
           });
           products10.innerHTML = container;             
    }
    
    
    
    function speedconceptbikes(){
        
        var speedconcept = [
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/SpeedConceptSLR7_22_35577_A_Primary",
                  
               },  
           ];
           
           var products11 = document.querySelector("#products11");
           var container = "";
           
          speedconcept.forEach(function(elem) {
               container += `
                   <div class="product-container">
                       <img src="${elem.image}" class="product11" alt="${elem.name}">
                   </div>
               `;
           });
           products11.innerHTML = container;             
    }
    
    
    function supercaliberbikes(){
        
        var supercaliber= [
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/SupercaliberSL97AXS-24-41719-A-Primary",
                   name:"Supercaliber SL 9.6 Gen 2",
                   price:"₹376,799",
                   color:"Alpine Blue"
               },
               { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/SupercaliberSLR99XXAXS-24-41725-C-Primary",
                   name:"Supercaliber SLR 9.9 XX AXS Gen 2",
                   price:"₹1,472,599",
                   color:"Argent Drizzle"
               },
               { image: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1024,h_768,c_pad/SupercaliberSL97AXS-24-41719-A-Primary",
                   name:"Supercaliber SL 9.7 AXS Gen 2",
                   price:"₹529,799",
                   color:"Plasma Grey Pearl"
               },
               
               
           ];
           
           var products12 = document.querySelector("#products12");
           var container = "";
           
         supercaliber.forEach(function(elem) {
               container += `
                   <div class="product-container">
                       <img src="${elem.image}" class="product12" alt="${elem.name}">
                   </div>
               `;
           });
           products12.innerHTML = container;
           
           var currentIndex = 1;
           var images = document.querySelectorAll(".product12");
           
           function updateSlider12() {
           
               images.forEach((img, idx) => {
                   gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
               });
           
               var prevIndex = (currentIndex - 1 + images.length) % images.length;
               var nextIndex = (currentIndex + 1) % images.length;
           
               gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
               gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
           
               gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
               gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
           
               gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
               gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
           
           
             
               document.querySelector("#name12").textContent =supercaliber[currentIndex].name;
               document.querySelector("#details12 #color12 .btn").textContent = ` ${supercaliber[currentIndex].color}`;
               document.querySelector("#details12 #price12 .price").textContent =supercaliber[currentIndex].price;
           }
           
           updateSlider12();
           
           document.querySelector("#slider-arrow12.right").addEventListener("click", function() {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider12();
           });
           
           document.querySelector("#slider-arrow12.left").addEventListener("click", function() {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider12();
           });
           
           images.forEach(function(image, idx) {
           image.addEventListener("click", function() {
           if (idx === currentIndex) return;
           
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
           
           if (idx === prevIndex) {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider12();
           } else if (idx === nextIndex) {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider12();
           }
           });
           });
    }
    
    
    
    function topfuelbikes(){
        
        var topfuel = [
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/TopFuel97SLXXT_22_35178_B_Primary",
                  
               },  
           ];
           
           var products13 = document.querySelector("#products13");
           var container = "";
           
          topfuel.forEach(function(elem) {
               container += `
                   <div class="product-container">
                       <img src="${elem.image}" class="product13" alt="${elem.name}">
                   </div>
               `;
           });
           products13.innerHTML = container;             
    }
    
    
    function vervebikes(){
        
        var verve= [
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Verve2Disc_21_32735_A_Primary",
                   name:"Verve 2 Disc Gen 4",
                   price:"₹50,199",
                   color:"Lithium Grey"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/Verve1Disc_21_32737_A_Primary",
                   name:"Verve 1 Disc",
                   price:"₹44,199",
                   color:"Trek Black"
               },
               
               
           ];
           
           var products14 = document.querySelector("#products14");
           var container = "";
           
         verve.forEach(function(elem) {
               container += `
                   <div class="product-container">
                       <img src="${elem.image}" class="product14" alt="${elem.name}">
                   </div>
               `;
           });
           products14.innerHTML = container;
           
           var currentIndex = 1;
           var images = document.querySelectorAll(".product14");
           
           function updateSlider14() {
           
               images.forEach((img, idx) => {
                   gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
               });
           
               var prevIndex = (currentIndex - 1 + images.length) % images.length;
               var nextIndex = (currentIndex + 1) % images.length;
           
               gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
               gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
           
               gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
               gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
           
               gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
               gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
           
           
             
               document.querySelector("#name14").textContent =verve[currentIndex].name;
               document.querySelector("#details14 #color14 .btn").textContent = ` ${verve[currentIndex].color}`;
               document.querySelector("#details14 #price14 .price").textContent =verve[currentIndex].price;
           }
           
           updateSlider14();
           
           document.querySelector("#slider-arrow14.right").addEventListener("click", function() {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider14();
           });
           
           document.querySelector("#slider-arrow14.left").addEventListener("click", function() {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider14();
           });
           
           images.forEach(function(image, idx) {
           image.addEventListener("click", function() {
           if (idx === currentIndex) return;
           
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
           
           if (idx === prevIndex) {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider14();
           } else if (idx === nextIndex) {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider14();
           }
           });
           });
    }
    
    
    
    function Xcaliberbikes(){
        
        var xcaliber= [
           { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/XCaliber9_22_35112_B_Primary",
                   name:"X-Caliber 9",
                   price:"₹118,999",
                   color:"Factory Orange"
               },
               { image: "https://media.trekbikes.com/image/upload/w_800,h_600,c_pad,f_auto,fl_progressive:semi,q_auto/XCaliber8_22_35069_A_Primary",
                   name:"X-Caliber 8",
                   price:"₹93,399",
                   color:"Satin Lithium Grey"
               },
               
               
           ];
           
           var products15 = document.querySelector("#products15");
           var container = "";
           
         xcaliber.forEach(function(elem) {
               container += `
                   <div class="product-container">
                       <img src="${elem.image}" class="product15" alt="${elem.name}">
                   </div>
               `;
           });
           products15.innerHTML = container;
           
           var currentIndex = 1;
           var images = document.querySelectorAll(".product15");
           
           function updateSlider15() {
           
               images.forEach((img, idx) => {
                   gsap.set(img.parentNode, { display: "none", transform: "translateX(0) scale(1)", opacity: 0.5 });
               });
           
               var prevIndex = (currentIndex - 1 + images.length) % images.length;
               var nextIndex = (currentIndex + 1) % images.length;
           
               gsap.set(images[prevIndex].parentNode, { display: "block", left: "3%", top: "15%", width: "22vw",ease: "circ.out" });
               gsap.to(images[prevIndex].parentNode, { transform: "translateX(-10%) scale(0.75)", duration: 0.5,ease: "circ.out" });
           
               gsap.set(images[currentIndex].parentNode, { display: "block", left: "50%", top: "10%", width: "52vw", opacity: 1,ease: "circ.out" });
               gsap.to(images[currentIndex].parentNode, { transform: "translateX(-50%) scale(1.05)", opacity: 1, duration: 0.5 ,ease: "circ.out"});
           
               gsap.set(images[nextIndex].parentNode, { display: "block", top: "15%", width: "22vw", left: "calc(100% - 3% - 22vw)",ease: "circ.out" });
               gsap.to(images[nextIndex].parentNode, { transform: "translateX(10%) scale(0.75)", duration: 0.5 ,ease: "circ.out"});
           
           
             
               document.querySelector("#name15").textContent =xcaliber[currentIndex].name;
               document.querySelector("#details15 #color15 .btn").textContent = ` ${xcaliber[currentIndex].color}`;
               document.querySelector("#details15 #price15 .price").textContent =xcaliber[currentIndex].price;
           }
           
           updateSlider15();
           
           document.querySelector("#slider-arrow15.right").addEventListener("click", function() {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider15();
           });
           
           document.querySelector("#slider-arrow15.left").addEventListener("click", function() {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider15();
           });
           
           images.forEach(function(image, idx) {
           image.addEventListener("click", function() {
           if (idx === currentIndex) return;
           
           var prevIndex = (currentIndex - 1 + images.length) % images.length;
           var nextIndex = (currentIndex + 1) % images.length;
           
           if (idx === prevIndex) {
               currentIndex = (currentIndex + 1) % images.length;
               updateSlider15();
           } else if (idx === nextIndex) {
               currentIndex = (currentIndex - 1 + images.length) % images.length;
               updateSlider15();
           }
           });
           });
    }
    
    
       
    
    
        var page1 = document.querySelector(".page1 ")
        var page2 = document.querySelector(".page2 ")
        var page3 = document.querySelector(".page3 ")
        var page4 = document.querySelector(".page4 ")
        var page5 = document.querySelector(".page5 ")
        var page6 = document.querySelector(".page6")
        var page7 = document.querySelector(".page7 ")
        var page8 = document.querySelector(".page8 ")
        var page9 = document.querySelector(".page9 ")
        var page10 = document.querySelector(".page10")
        var page11 = document.querySelector(".page11  ")
        var page12 = document.querySelector(".page12  ")
        var page13 = document.querySelector(".page13  ")
        var page14 = document.querySelector(".page14  ")
        var page15 = document.querySelector(".page15  ")
    
    
        var    checkpointBtn  =  document.querySelector("#Checkpoint")
        var    DomaneBtn = document.querySelector("#Domane")
        var    dualSportBtn = document.querySelector("#dualSport")
        var    FxBtn = document.querySelector("#FX")
        var    fuelExBtn = document.querySelector("#fuelEX")
        var    madoneBtn = document.querySelector("#madone")
        var    marlinBtn = document.querySelector("#Marlin")
        var    procaliberBtn = document.querySelector("#Procaliber")
        var    roscoeBtn = document.querySelector("#Roscoe")
        var    speedConceptBtn = document.querySelector("#speedConcept")
        var    supercaliberBtn = document.querySelector("#Supercaliber")
        var    topFuelBtn = document.querySelector("#topFuel")
        var   verveBtn = document.querySelector("#Verve")
        var    xCaliberBtn = document.querySelector("#xCaliber")
        var    emondaBtn = document.querySelector("#emonda")
    
        function hideAllPages() {
            page1.classList.add("hidden")
            page2.classList.add("hidden")
            page3.classList.add("hidden")
            page4.classList.add("hidden")
            page5.classList.add("hidden")
            page6.classList.add("hidden")
            page7.classList.add("hidden")
            page8.classList.add("hidden")
            page9.classList.add("hidden")
            page10.classList.add("hidden")
            page11.classList.add("hidden")
            page12.classList.add("hidden")
            page13.classList.add("hidden")
            page14.classList.add("hidden")
            page15.classList.add("hidden")
           
        }
        hideAllPages()
        checkpointbikes()
        page1.classList.remove("hidden")
    
    
        checkpointBtn.addEventListener("click", function(){
            hideAllPages()
            checkpointbikes()
            page1.classList.remove("hidden")
        })
    
        DomaneBtn.addEventListener("click", function(){
            hideAllPages()
            domanebikes()
            page2.classList.remove("hidden")
        })
    
        dualSportBtn.addEventListener("click", function(){
            hideAllPages()
            dualsportbikes()
            page3.classList.remove("hidden")
        })
    
        FxBtn.addEventListener("click", function(){
            hideAllPages()
            fxbikes()
            page4.classList.remove("hidden")
        })
    
        fuelExBtn.addEventListener("click", function(){
            hideAllPages()
            fuelex()
            page5.classList.remove("hidden")
            console.log("gawsdgfh")
        })
    
        madoneBtn.addEventListener("click", function(){
            hideAllPages()
            modanbikes()
            page6.classList.remove("hidden")
        })
    
        marlinBtn.addEventListener("click", function(){
            hideAllPages()
            marlinbikes()
            page7.classList.remove("hidden")
        })
    
        procaliberBtn.addEventListener("click", function(){
            hideAllPages()
            Procaliberbikes()
            page8.classList.remove("hidden")
        })
    
        roscoeBtn.addEventListener("click", function(){
            hideAllPages()
            roscuebikes()
            page9.classList.remove("hidden")
        })
    
        speedConceptBtn.addEventListener("click", function(){
            hideAllPages()
            speedconceptbikes()
            page10.classList.remove("hidden")
        })
    
        supercaliberBtn .addEventListener("click", function(){
            hideAllPages()
            supercaliberbikes()
            page11.classList.remove("hidden")
        })
    
        topFuelBtn.addEventListener("click", function(){
            hideAllPages()
            topfuelbikes()
            page12.classList.remove("hidden")
        })
    
        verveBtn.addEventListener("click", function(){
            hideAllPages()
            vervebikes()
            page13.classList.remove("hidden")
        })
    
        xCaliberBtn.addEventListener("click", function(){
            hideAllPages()
           Xcaliberbikes()
            page14.classList.remove("hidden")
        })
    
        emondaBtn.addEventListener("click", function(){
            hideAllPages()
            emondabikes()
            page15.classList.remove("hidden")
        })
    
    
    
    
    
    
    
    
    const cursor = document.querySelector('.cursor');
    
    const updateCursorPosition = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };
    
    document.addEventListener('mousemove', updateCursorPosition);
    
    
    
    
















var landing = document.querySelector(".landing");
var circle = document.querySelector(".circle");
var secs = document.querySelectorAll(".sec");
var h1s = document.querySelectorAll(".first h1");
var models = document.querySelectorAll(".end .itemno h1");
var colors = document.querySelectorAll(".end .colors h1");
var colos = document.querySelectorAll(".mid .right .colo");
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var img3 = document.querySelector(".img3")
var img4 = document.querySelector(".img4")
var img5 = document.querySelector(".img5")
var img6 = document.querySelector(".img6")
var img7 = document.querySelector(".img7")
var img8 = document.querySelector(".img8")
var img9 = document.querySelector(".img9")
var trek = document.querySelector(".landing .mid .mid h1")


Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
Shery.hoverWithMediaCircle(".nav .middle .cta", {
    images: ["mountain.jpeg", "road.jpg", "gravel.jpeg","city.jpg","helmet.jpg","clothing.jpg"] ,
  });

var tl = gsap.timeline()

tl.from(trek,{
    opacity:0,
    duration:2,
    ease:"power2.in"
})
tl.from(".circle",{
    delay:-.1,
    duration:.5,
    y:"80%",
    ease:"power2.in"
})

tl.from(".nav",{
    y:-50,
    opacity:0,
    duration:1,
    ease:"power1.out",
})

tl.from(".mid .left",{
    opacity:0,
    duration:.5,
    x:-40,
    ease:"power2.in"
})


Shery.imageEffect(".banner1 img",{
    style: 5,
    config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.974667743593509},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})


Shery.imageEffect(".banner2",{
    style: 5,
   config: {"a":{"value":0.23,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0822368421052633},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.96,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.11,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.41,"range":[0,2]},"noise_scale":{"value":6.11,"range":[0,100]}},
    gooey:true
})

function greyout() {
    gsap.to(secs, {
        opacity: 0
    });
    gsap.to(h1s, {
        opacity: 0.5
    });
    gsap.to(models, {
        opacity: 0
    });
    gsap.to(colors, {
        opacity: 0
    });
    gsap.to(colos, {
        display: "none",
        opacity: 0
    });
}



var rotate = 270;
var id = 0;
var inter;
var customColorTimeout;

function defaultclr() {
    landing.style.backgroundColor = "black";
    landing.style.color = "white";
}

function startInterval() {
    inter = setInterval(function () {
        if (id < secs.length) {
            rotate -= 45;
            id++;
            circle.style.transform = `rotate(${rotate}deg)`;
            greyout();
            gsap.to(secs[id - 1], {
                opacity: 1,
                duration: .5,
                ease: "power4.in"
            });
            gsap.to(h1s[id - 1], {
                opacity: 1,
                duration: .5,
                ease: "power4.in"
            });
            gsap.to(models[id - 1], {
                opacity: 1,
                y: -10,
                duration: .5,
                ease: "power4.in"
            });
            gsap.to(colors[id - 1], {
                opacity: 1,
                y: -10,
                duration: .5,
                ease: "power4.in"
            });
            gsap.to(colos[id - 1], {
                opacity: 1,
                display: "initial",
                duration: .5,
                ease: "power1.in"
            });
        } else {
            id = 0;
        }
    }, 3000);
}

startInterval();

function changeColor(color) {
    landing.style.backgroundColor = color;
    landing.style.color = "black";
    clearInterval(inter);
    clearTimeout(customColorTimeout);
    customColorTimeout = setTimeout(function () {
        defaultclr();
        startInterval();
    }, 2000);
}

var cl_sl5 = document.querySelectorAll(".sl5 .clbix");

cl_sl5.forEach(function (value) {
    value.addEventListener("click", function (dets) {
        if (dets.target.id === "1") {
            console.log("clicked");
            dets.target.style.transform = "scale(1.5)";
            dets.target.style.border = "2px solid black";
            changeColor("#CCCCCC");
            img1.classList.add("hidden")
            img2.classList.remove("hidden")
            cl_sl5.forEach(function (elem) {
                if (elem !== dets.target) {
                    elem.style.transform = "scale(1)";
                }
            });
        }
    });
});

var cl_ealr = document.querySelectorAll(".ealr .clbix");

cl_ealr.forEach(function (value) {
    value.addEventListener("click", function (dets) {
        if (dets.target.id === "1") {
            console.log("clicked");
            dets.target.style.transform = "scale(1.5)";
            dets.target.style.border = "2px solid black";
            changeColor("#CCCCCC");
            img3.classList.add("hidden")
            img4.classList.remove("hidden")
            cl_sl5.forEach(function (elem) {
                if (elem !== dets.target) {
                    elem.style.transform = "scale(1)";
                }
            });
        }
    });
});

var cl_fxs = document.querySelectorAll(".fxs .clbix");

cl_fxs.forEach(function (value) {
    value.addEventListener("click", function (dets) {
        if (dets.target.id === "1") {
            console.log("clicked");
            dets.target.style.transform = "scale(1.5)";
            dets.target.style.border = "2px solid black";
            changeColor("#999999");
            img5.classList.add("hidden")
            img6.classList.remove("hidden")
            cl_sl5.forEach(function (elem) {
                if (elem !== dets.target) {
                    elem.style.transform = "scale(1)";
                }
            });
        }
    });
});

var cl_marlin = document.querySelectorAll(".marlin .clbix");

cl_marlin.forEach(function (value) {
    value.addEventListener("click", function (dets) {
        if (dets.target.id === "0") {
            console.log("clicked");
            dets.target.style.transform = "scale(1.5)";
            dets.target.style.border = "2px solid black";
            changeColor("#a9d9f7");
            img7.classList.add("hidden")
            img8.classList.remove("hidden")
            cl_sl5.forEach(function (elem) {
                if (elem !== dets.target) {
                    elem.style.transform = "scale(1)";
                }
            });
        }
        else if (dets.target.id === "3") {
            console.log("clicked");
            dets.target.style.transform = "scale(1.5)";
            dets.target.style.border = "2px solid black";
            changeColor("#84ABAB");
            img8.classList.add("hidden")
            img9.classList.remove("hidden")
            cl_sl5.forEach(function (elem) {
                if (elem !== dets.target) {
                    elem.style.transform = "scale(1)";
                }
            });
        }
    });
});

var bgvideo = document.querySelector(".info")
var video = document.querySelector(".bgvideo video")
var vidbut = document.querySelector(".bgvideo h3")

vidbut.addEventListener("mouseenter",function(){
   
    bgvideo.style.transform = "scale(1) translate(-50%, -50%)"
    gsap.to(video,{
        opacity:.7,
        duration: .2,
        ease:"power1.in"
    })
})

gsap.to(".fullcateg",{
    scrollTrigger:{
        trigger:".categ1",
        scroller:"#main",
        start:"top 0%",
        end: "top -200%",
        scrub:.5,
        pin:true
    },
    '--clip':"100%",
    ease:"power1.in",
})


gsap.to(".bannerwrap",{
    transform: "translateX(-100%)",
    scrollTrigger:{
        trigger:".banners",
        scroller:"#main",
        start:"top 0%",
        end:"top -200%",
        scrub:.3,
        pin:true
    },
    ease:"power1.out",
})
tl.to("#top #left",{
    y:50,
   x:50,
    opacity:1,
    duration:1,


})


