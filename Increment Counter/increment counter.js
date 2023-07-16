const counters  = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = counter.getAttribute('data-target');
        // console.log(targetCount);
        // here the target count is a string 
        // to convert from string to number we can use any one of these methods

        var num = +targetCount;
        // var n = Number(targetCount);
        // var n = parseFloat(targetCount);
        // console.log(num);

        const startCounter = Number(counter.innerHTML);

        const increment = targetCount/100;

        if(startCounter < targetCount) {
            counter.innerHTML = `${Math.round(startCounter + increment)}`;
            setTimeout(updateCounter, 30);
        }

        else {
            counter.innerHTML = targetCount;
        }

    }

    updateCounter();
})