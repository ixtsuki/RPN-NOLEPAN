/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str: string): string {
    const vocals = "aiueoAIUEO".split("");
    const changelings = "bjvfpBJVFP".split("");
    for (let i = 0; i < vocals.length; i++)
        str = str.replace(new RegExp(vocals[i], "g"), changelings[i]);
    return str;
  }
  
  function reverseWord (str: string): string {
    const arrStr: string[] = [];
    for (let i = str.length - 1; i >= 0; i--)
        arrStr.push(str[i]);
    return arrStr.join("");
  }
  
  function setLowerUpperCase (str: string): string {
    const uppperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowerCases = "abcdefghijklmnopqrstuvwxyz".split("");
    const arrStr = str.split("");
    for (let i = 0; i < arrStr.length; i++) {
        const ui = uppperCases.indexOf(arrStr[i]);
        const li = lowerCases.indexOf(arrStr[i]);
        if (ui === -1 && li === -1) continue;
        if (ui !== -1 ) arrStr[i] = lowerCases[ui];
        else arrStr[i] = uppperCases[li];
    }
    return arrStr.join("");
  }
  
  function removeSpaces (str: string): string {
    const arrStr: string[] = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") continue;
        arrStr.push(str[i]);
    }
    return arrStr.join("");
  }
  
  function passwordGenerator (name: string): string {
    if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';
    return removeSpaces(
        setLowerUpperCase(
            reverseWord(
                changeVocals(name)
            )
        )
    );
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'