const APIResponse = {
    "status": "success",
    "message": {
        "affenpinscher": [],
        "african": [],
        "airedale": [],
        "akita": [],
        "appenzeller": [],
        "basenji": [],
        "beagle": [],
        "bluetick": [],
        "borzoi": [],
        "bouvier": [],
        "boxer": [],
        "brabancon": [],
        "briard": [],
        "bulldog":["boston","french"],
        "bullterrier":["staffordshire"],
        "cairn": [],
        "cattledog":["australian"],
        "chihuahua": [],
        "chow": [],
        "clumber": [],
        "cockapoo": [],
        "collie": ["border"],
        "coonhound": [],
        "corgi": ["cardigan"],
        "cotondetulear": [],
        "dachshund": [],
        "dalmatian": [],
        "dane": ["great"],
        "deerhound": ["scottish"],
        "dhole": [],
        "dingo": [],
        "doberman": [],
        "elkhound": ["norwegian"],
        "entlebucher": [],
        "eskimo": [],
        "frise": ["bichon"],
        "germanshepherd": [],
        "greyhound": ["italian"],
        "groenendael": [],
        "hound": ["afghan","basset","blood","english","ibizan","walker"],
        "husky": [],
        "keeshond": [],
        "kelpie": [],
        "komondor": [],
        "kuvasz": [],
        "labrador": [],
        "leonberg": [],
        "lhasa": [],
        "malamute": [],
        "malinois": [],
        "maltese": [],
        "mastiff": ["bull","tibetan"],
        "mexicanhairless": [],
        "mix": [],
        "mountain": ["bernese","swiss"],
        "newfoundland": [],
        "otterhound": [],
        "papillon": [],
        "pekinese": [],
        "pembroke": [],
        "pinscher": [
            "miniature"
        ],
        "pointer": [
            "german",
            "germanlonghair"
        ],
        "pomeranian": [],
        "poodle": [
            "miniature",
            "standard",
            "toy"
        ],
        "pug": [],
        "puggle": [],
        "pyrenees": [],
        "redbone": [],
        "retriever": ["chesapeake","curly","flatcoated","golden"],
        "ridgeback": ["rhodesian"],
        "rottweiler": [],
        "saluki": [],
        "samoyed": [],
        "schipperke": [],
        "schnauzer": ["giant","miniature"],
        "setter": ["english","gordon","irish"],
        "sheepdog": ["english","shetland"],
        "shiba": [],
        "shihtzu": [],
        "spaniel": [
            "blenheim",
            "brittany",
            "cocker",
            "irish",
            "japanese",
            "sussex",
            "welsh"
        ],
        "springer": [
            "english"
        ],
        "stbernard": [],
        "terrier": [
            "american",
            "australian",
            "bedlington",
            "border",
            "dandie",
            "fox",
            "irish",
            "kerryblue",
            "lakeland",
            "norfolk",
            "norwich",
            "patterdale",
            "russell",
            "scottish",
            "sealyham",
            "silky",
            "tibetan",
            "toy","westhighland","wheaten","yorkshire"],
        "vizsla": [],
        "weimaraner": [],
        "whippet": [],
        "wolfhound": ["irish"]
    }
}

let breedList = [];
let info = APIResponse['message']

function toUpperCase(names){
  let answer = "";
  answer+= names[0].toUpperCase()+names.slice(1)
  return(answer)
}

Object.keys(info).forEach((breed) => {
  if (info[breed].length) {
    info[breed].forEach((subBreed) => {
      breedList.push((toUpperCase(subBreed) + " " + toUpperCase(breed)))
    })
  } else {
    breedList.push(toUpperCase(breed))
  }
})

function getDog (){
  let position = Math.floor(Math.random() * 131)
  return breedList[position]
}

document.addEventListener("DOMContentLoaded" ,()=>{
  let body = document.querySelector("body");
  let submit = document.querySelector(".submit")
  let submit2 = document.querySelector(".submit")
  let createP =document.createElement("p");

  function makeDog(){
    createP.innerText = getDog();
    event.target.parentNode.appendChild(createP,event.target)
  }
  function removeDog(){
    let createP =document.createElement("p");
    event.target.parentNode.appendChild(createP,event.target).remove(createP,event.target)
  }


  submit.addEventListener("click",()=>{
    submit.innerText = `Another One!`
    makeDog()
  submit2.addEventListener("click",()=>{
    removeDog()
    })
  })
})
