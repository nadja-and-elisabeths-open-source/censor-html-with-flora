function floralCensorHtml(input){

    var output = input;

    var cusswords = /(damn|crap|bloody|sod|bugger|arse|git|bint|munter|minger|balls|arsehole|ass|asshole|shit|piss|christ|bitch|bollocks|bellend|tit|snatch|clunge|gash|prick|twat|punani|pussy|minge|cock|knob|dick|bastard|fuck|wanker|cunt)/gi;

    var floralArray = ["lilium", "rosa", "tulipa", "phalaenopsis", "dianthus", "freesia", "alstroemeria", "chrysanthemum", "gladiolus", "anemone", "narcissus", "papaver", "helianthus"];

    function floralShuffle(i){
        return i[Math.floor(Math.random() * i.length)];
    }

    var body = document.querySelector(".censorCussword");
    console.log("body");

    var isCussword = cusswords.test(output);

    while(isCussword){
        let currentCussword = output.match(cusswords);
        if (Object.prototype.toString.call(currentCussword) == "[object Array]")
            output = output.replace(currentCussword[0], floralShuffle(floralArray));
        isCussword = cusswords.test(output);
        body.innerHTML = isCussword;
    }  
    
    console.log(output);
}

//module.exports = floralCensorHtml;