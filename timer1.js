const timer = (timers)=> {
  for (const time of timers) {
    if (!isNaN(parseInt(time)) && parseInt(time) >= 0) {
      setTimeout(()=> {
        console.log('BEEP!', time + ' seconds');
      }, parseInt(time * 1000))
    }
  }
}
timer(process.argv.slice(2));