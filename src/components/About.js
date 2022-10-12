import React from "react";

export default function About(props) {

  return (
    <div className="container" style={{backgroundColor: props.mode==='dark'?'#151a45':'white',color: props.mode==='light'?'black':'white'}} >
      <h1 className="my-3">About Us</h1>
      <div className="accordion my-5" id="accordionExample" >
       <div class="accordion-item" style={{backgroundColor: props.mode==='dark'?'#151a45':'white',color: props.mode==='light'?'black':'white'}}>
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor: props.mode==='dark'?'#151a45':'white',color: props.mode==='light'?'black':'white'}}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              TextUtils is a collection of word analyzer tools, be it word counter, conversion to upper case or lowercase and many more!
            </div>
          </div>
        </div>
       <div class="accordion-item" style={{backgroundColor: props.mode==='dark'?'#151a45':'white',color: props.mode==='light'?'black':'white'}}>
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor: props.mode==='dark'?'#151a45':'white',color: props.mode==='light'?'black':'white'}}
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              The website is totally free of cost. You need not pay 
            </div>
          </div>
        </div>
       <div class="accordion-item" style={{backgroundColor: props.mode==='dark'?'#151a45':'white',color: props.mode==='light'?'black':'white'}}>
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor: props.mode==='dark'?'#151a45':'white',color: props.mode==='light'?'black':'white'}}
            >
              Dark & Light Mode Available
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
             The Website supports both dark and light mode and is very user friendly. The dark mode is made for low light uses to protect the eyes and provide a smooth and nice UI.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
