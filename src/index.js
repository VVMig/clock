const clock = () => {
    const deg = 6;
    const mn = document.querySelector('.minutes');
    const hr = document.querySelector('.hours');
    const s = document.querySelector('.seconds');
    const transformOption = 'translateX(-50%) translateY(-100%)'

    const interval = setInterval(()=>{
        let time = new Date();
        let hh = time.getHours()*30;
        let mm = time.getMinutes()*deg;
        let ss = time.getSeconds()*deg;

        mn.style.transform = `${transformOption} rotateZ(${mm}deg)`;
        hr.style.transform = `${transformOption} rotateZ(${hh+(mm/12)}deg)`;
        s.style.transform = `${transformOption} rotateZ(${ss}deg)`;
    });
};

clock();