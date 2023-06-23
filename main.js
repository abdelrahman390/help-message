let allSections = document.querySelectorAll(".main_box  .right_side > div"),
firstSection = document.querySelector(".main_box  .right_side .Personal_info"),
nextButton = document.querySelector(".main_box  .right_side #right"),
spans = document.querySelectorAll(".main_box .lift_side .container .box span"),
firstFormData = document.querySelectorAll(".main_box .right_side .Personal_info .box input"),
formTestAlarm = document.querySelectorAll(".main_box .right_side .Personal_info .box .textAndWarning span");

let YearlySubscribe = document.querySelector(".togleSwitch h4:last-child"),
MonthlySubscribe = document.querySelector(".togleSwitch h4:first-child"),
yearlyPrice = document.querySelectorAll(".main_box .right_side .Select_your_plan .boxs_container .box .text_box h4:nth-child(2)"),
therdSectionDuration = document.querySelectorAll(".main_box .right_side .Pick_add_ons .check_box .right_cont h4");


let overLayDiv = document.querySelector(".helpDiv"),
skipBox = document.querySelectorAll(".helpBox"),
skipButton = document.querySelectorAll(".helpBox button"),
skipBoxHt = document.querySelectorAll(".helpBox h4"),
highLiteBox = document.querySelectorAll(".main_box .right_side .Personal_info .box"),
highLiteBoxH4 = document.querySelectorAll(".main_box .right_side .Personal_info .box .textAndWarning h4:first-child")
highLiteBox[0].style.cssText  = "position: relative; z-index: 7;"
highLiteBoxH4[0].classList.add("active")
skipBox[0].style.display = "flex" 
document.querySelector(".main_box").style.zIndex = "unset"


skipButton.forEach((element , index)=> {
    element.onclick = () => {
        if(index < 2){
            // highLiteBoxH4[index + 1].style.color = "white"
            skipBox[index].style.display = "none"
            highLiteBox[index].style.cssText  = ""
            highLiteBox[index + 1].style.cssText  = "position: relative; z-index: 7;"
            skipBox[index + 1].style.display = "flex"
            highLiteBoxH4[index].classList.remove("active")
            highLiteBoxH4[index + 1].classList.add("active")
        } else{
            skipBox[index].style.display = "none"
            overLayDiv.style.display = "none"
            highLiteBoxH4[index].classList.remove("active")
            document.querySelector(".main_box").style = ""
        }


    }
});

