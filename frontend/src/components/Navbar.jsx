export default function Navbar() {
  return(
<div>
  <div data-nav-modal class="modal-bg hidden">
    <div burgerList class="flex flex-col justify-between bg-neutral-800 w-64 h-full">
      <div class="text-white">
        <div onclick="toggleNavBurger();" class="flex items-center bg-neutral-900 border-b border-b-neutral-700 px-4 py-4 gap-4">
          <svg class="fill-neutral-100 w-9 h-9 cursor-pointer" viewBox="0 0 20 20"><path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path></svg>
          <div class="w-8 h-8 flex">
            <img class="w-full h-full" src="https://www.beatstars.com/assets/img/bs-logos/logo-red.svg"/>
          </div>
        </div>
        <div burgerList class="flex flex-col border-b border-b-neutral-700 mx-4 pt-3 pb-8 gap-4">
          <div class="li cursor-pointer">Feed</div>
          <div class="li cursor-pointer">Tracks</div>
          <div class="li cursor-pointer">Distribution</div>
          <div class="li cursor-pointer">Publishing</div>
          <div class="li cursor-pointer">Beat ID</div>
          <div class="li cursor-pointer">Gift Cards</div>
        </div>
        <div class="flex flex-col px-4 pt-8 pb-3 gap-4">
          <div class="li cursor-pointer">Explore</div>
          <div class="li cursor-pointer">Creator</div>
        </div>
      </div>    
      <div class="bg-neutral-900 p-4"> 
        <div class="text-white text-sm pb-4">Start monetize your beats, instrumentals, and music services!</div>
        <div class="flex gap-4">
          <button class="btn flex text-white px-3 p-2 bg-blue-600 hover:bg-blue-500 rounded">Start selling</button>
          <button class="btn flex text-neutral-400 p-2 hover:text-neutral-500 rounded-full">Sign in</button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-neutral-900 w-full">
    <div class="con-nav">
      <div class="r-0-wrapper">
        <div class="flex items-center gap-2">
          <div onclick="toggleNavBurger();" class="flex px-2 h-full justify-center items-center cursor-pointer">
            <svg class="stroke-neutral-400 fill-neutral-400 w-8 h-8" viewBox="0 0 20 20" transform="scale(0.8,1)">
  						<path d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path>
  					</svg>
          </div>
          <div class="w-6 h-6 flex cursor-pointer">
            <img class="w-full h-full" src="https://www.beatstars.com/assets/img/bs-logos/logo-red.svg" />
          </div>
        </div>
        <div class="flex items-center">
          <button class="btn flex text-neutral-400 p-2 ml-2 hover:text-neutral-500 rounded-full">Sign up</button>
          <div class="flex justify-center items-center hover:bg-neutral-700 rounded-full px-2 h-full cursor-pointer">
            <svg class="stroke-neutral-400" x="0px" y="0px" width="24" height="24" viewBox="0 0 20 20"><path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path><path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path><path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path></svg>
          </div>
        </div>
      </div>
      <div class="r-1-wrapper">
        <div class="r-1-con">
          <div class="flex items-center w-full">
            <div onclick="toggleNavBurger();" class="hidden md:flex lg:hidden mr-2 h-full justify-center items-center cursor-pointer">
              <svg class="stroke-neutral-400 fill-neutral-400 w-8 h-8" viewBox="0 0 20 20" transform="scale(0.8,1)"><path d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path></svg>
            </div>
            <div class="w-6 h-6 hidden md:flex cursor-pointer">
              <img class="w-full h-full" src="https://www.beatstars.com/assets/img/bs-logos/logo-red.svg" />
            </div>
            <form class="sb">
              <button type="submit">
                <svg class="ico-caret-hov" x="0px" y="0px" width="16" height="16" viewBox="0 0 20 20"><path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path></svg>
              </button>
              <input type="text" placeholder="What are you looking for?" />
              <div class="dropd ico-caret-hov">Testeris
                <div class="hidden absolute rounded-sm overflow-hidden shadow-sm shadow-neutral-800 z-10">
                  <div class="li">All</div>
                  <div class="li">Tracks</div>
                  <div class="li">Musicians</div>
                  <div class="li">Playlists</div>
                  <div class="li">Albums</div>
                  <div class="li">Sound Kits</div>
                  <div class="li">Services</div>
                </div>
                <svg x="0px" y="0px" width="12" height="16" viewBox="0 0 20 20" transform='rotate(-90)'><path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path></svg>
              </div>
            </form>
          </div>
          <div class="flex items-center gap-3">
            <button class="btn ico-caret-hov hidden lg:flex  text-neutral-400 p-2 hover:bg-neutral-700 rounded-full">Explore
              <svg x="0px" y="0px" width="12" height="16" viewBox="0 0 20 20" transform='rotate(-90)'><path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path></svg>
            </button>
            <button class="btn ico-caret-hov hidden lg:flex text-neutral-400 p-2 hover:bg-neutral-700 rounded-full">Creator
              <svg x="0px" y="0px" width="12" height="16" viewBox="0 0 20 20" transform='rotate(-90)'><path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path></svg>
            </button>
            <button class="btn hidden md:flex text-neutral-400 p-2 hover:text-neutral-500 rounded-full">Sign up</button>
            <div class="btn hidden md:flex font-light text-neutral-400">|</div>
            <button class="btn hidden md:flex text-neutral-400 p-2 hover:text-neutral-500 rounded-full">Sign in</button>
            <button class="btn hidden md:flex text-white px-3 p-2 bg-blue-600 hover:bg-blue-500 rounded">Start selling</button>
            <div class="hidden md:flex first-line:justify-center items-center hover:bg-neutral-700 rounded-full px-1 h-full cursor-pointer">
              <svg class="stroke-neutral-400" x="0px" y="0px" width="24" height="24" viewBox="0 0 20 20"><path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path><path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path><path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path></svg>
              <svg class="ico-caret-hov" x="0px" y="0px" width="12" height="16" viewBox="0 0 20 20" transform='rotate(90)'><path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path></svg>
            </div>
          </div> 
        </div>
      </div>
      <div data-nav-li-wrapper class="r-2-wrapper hidden lg:block w-full">
        <ul class="nav-li">
          <li>Feed</li>
          <li>Tracks</li>
          <li>Distribution</li>
          <li>Publishing</li>
          <li>Beat ID</li>
          <li>Gift Cards</li>
        </ul>
      </div>
    </div>
  </div>
</div>
)
}