function anagram(x, y){
    let ana1 = x.split('').sort().join('');
    let ana2 = y.split('').sort().join('');
    if (ana1 == ana2){
        console.log('true');
    } else{
        console.log('false');
    }
}

anagram('cinema', 'iceman');






