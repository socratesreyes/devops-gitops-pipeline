console.log("🚀 Starting Measurable CPU Stress Test...");

let operationsCount = 0;
let lastLogTime = Date.now();

function syncStress() {
    let x = 0.0001;
    while (true) {
        x += Math.sqrt(x) * Math.sin(x);
        if (x > 10000) x = 0.0001;
        
        operationsCount++;

        // Inline check: Check if 3 seconds have passed
        if (operationsCount % 5_000_000 === 0) { 
            let currentTime = Date.now();
            let elapsed = (currentTime - lastLogTime) / 1000; // in seconds

            if (elapsed >= 3) {
                let opsPerSecond = (operationsCount / elapsed) / 1_000_000;
                console.log(`📊 Processing Speed: ${opsPerSecond.toFixed(2)} Million operations/sec`);
                
                // Reset trackers
                operationsCount = 0;
                lastLogTime = Date.now();
            }
        }
    }
}

syncStress();
