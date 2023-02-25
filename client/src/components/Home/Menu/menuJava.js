class MakeSlider {
    constructor() {
        this.template = document.getElementsByClassName("template");
        this.template1 = document.getElementsByClassName("template_1");
        this.template2 = document.getElementsByClassName("template_2");
        this.template3 = document.getElementsByClassName("template_3");
        this.template4 = document.getElementsByClassName("template_4");
    }

    deleteClass(){
        Array.from(slika.template).forEach((el, i) => {
            el.classList.remove(el.classList[2])
        })
    }
    static firstImage() {
        slika.deleteClass();
        slika.template1[0].classList.add("change4")
        slika.template2[0].classList.add("change1")
        slika.template3[0].classList.add("change2")
        slika.template4[0].classList.add("change3")
    };

    static secondImage() {
        slika.deleteClass();
        slika.template1[0].classList.add("change3")
        slika.template2[0].classList.add("change4")
        slika.template3[0].classList.add("change1")
        slika.template4[0].classList.add("change2")
    }
    static thirdImage() {
        slika.deleteClass();
        slika.template1[0].classList.add("change2")
        slika.template2[0].classList.add("change3")
        slika.template3[0].classList.add("change4")
        slika.template4[0].classList.add("change1")
    }
    static fourthImage() {
        slika.deleteClass();
        slika.template1[0].classList.add("change1")
        slika.template2[0].classList.add("change2")
        slika.template3[0].classList.add("change3")
        slika.template4[0].classList.add("change4")
    }
}

const slika = new MakeSlider();

export default MakeSlider;