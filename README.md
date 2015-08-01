# Codr

Welcome to Codr: a minimalistic and versatile portfolio theme built using the Bootstrap framework

![Preview Image](http://pranavrele.github.io/codr/img/dist/codr_preview.png)

[Live Demo](http://pranavrele.github.io/codr/)

## Table of Contents

1. Get Started - without Grunt

2. Get Started - with Grunt

	2.1 Grunt Setup
	
3. Home Section
	
4. About Section
	
	4.1 Skills Section
	
5. Work Section
	
	5.1 Work Carousel
	
6. Contact Section
	
7. Optimization

8. Credits

9. Contact & Issues

10. Copyright

### 1. Get Started - without Grunt

The optimizations done within Codr depend on Grunt. If you choose NOT to use Grunt you may delete the following:

	a. index.html
	b. css/dist - only /dist directory within /css
	c. js/dist - only /dist directory within /js
	d. img/dist - only /dist directory within /img
	e. Gruntfile.js

Once this is done rename the alt_index.html file to index.html.

If you are not using Grunt it is strongly advised you use some other optimization tool to concatenate and minify for faster load times. If you choose this method you may need to alter the reference statements to the css and javascript files the newly renamed index.html accordingly. 

### 2. Get Started - with Grunt

If using Grunt please familiarize yourself with the Gruntfile provided and its working. This file can largely be untouched unless you need to minify project images in which case reference 5.1 Work Carousel. Furthermore, you may delete the alt-index.html file if using Grunt.

#### 2.1 Grunt Setup

You will need to install [Grunt](http://gruntjs.com/getting-started) first. Follow the instructions provided at their page to get set up with Node.js, npm and Grunt.

Once Grunt is installed globally, install it within your project directory via:

```shell
npm install grunt --save-dev
```
Depending on your system user account type, you may need to use sudo for shell commands.

Next setup the following Node Modules:

No need to edit the Gruntfile here, simply install these modules into the project directory via the terminal.

concat
```shell
npm install grunt-contrib-concat --save-dev
```
uglify
```shell
npm install grunt-contrib-uglify --save-dev
```
cssmin
```shell
npm install grunt-contrib-cssmin --save-dev
```
imagemin
```shell
npm install grunt-contrib-imagemin --save-dev
```
imagemin-mozjpeg
```shell
npm install --save imagemin-mozjpeg
```
watch
```shell
npm install grunt-contrib-watch --save-dev
```
Once all modules are successfully installed give the following command to test if the setup was successful:

```shell
grunt
```
It should run successfully with no errors.

### 3. Home Section

To change the background image of the Home section navigate to img/src/general. Delete background.jpg that exists in the folder and place your image there renaming it background.jpg. Please note images that are too large may cause slower load times. The advised image size is 2560px wide.

To change the text in this section navigate to the following with index.html:

```html
	<!-- START HEADER -->
	<header id="home" class="hero parallax-yes">
		<div id="parallax-1" class="parallax">
			<div class="bcg skrollable skrollable-between" data-anchor-target="#parallax-1" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50%" data-bottom-top="background-position: 50% 100px;">
				<div class="hero-body">
					<div class="hero-text text-center">
						<h1 class="small">
							>_&nbsp<span class="text-accent">cd</span> Codr <span class="blinker"></span>
						</h1>
						<h1>Front-End <span class="text-accent"> Developer</span></h1>
					</div>
					<div class="mouse-icon">
						<div class="wheel"></div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- ENDER HEADER -->
```

### 4. About Section

To add your image to the About section navigate to img/src/general. Delete profile.jpg that exists in the folder and place your image there renaming it profile.jpg. Please note that landscape images work best here.

To alter the text in this section navigate to the following with index.html:

```html
<!-- START ABOUT -->
	<section id="about" class="section">
		<div class="container section-wrapper">
			<div class="section-content">
				<div class="row">		
					<div class="col-md-5 match-height pp-wrapper">
						<div class="profile-picture style-profile">
							<img src="/img/dist/general/profile.jpg" alt="profile picture" class="img-responsive"/>
						</div>
					</div>					
					<div class="col-md-7 match-height">
						<div class="profile-text padding-left-yes">
							<div class="row">
								<div class="col-md-12">
									<h2 class="section-title uppercase text-grey">I am Codr</h2>
									<p class="section-subtitle text-grey">A portfolio theme created by Pranav Rele.</p>
									<span class="divider"></span>
									<p class="text-dark">Codr is a minimalistic and versatile theme for creating your portfolio site. This theme is open-source and free to use. Codr is a single page solution to help anyone define their skill set and display their portfolio.</p>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</section>
```

#### 4.1 Skills Section

To alter the icons and text in this section find the following within index.html:

```html
<section id="skills" class="section bg-grey">
		<div class="container section-wrapper">
			<div class="section-content">
				<div class="row text-center content-row">
					<div class="col-md-3 col-sm-6 match-height wow fadeIn" data-wow-delay=".2s">
						<div class="about-content">
							<i class="fa fa-code fa-4x text-accent"></i>
							<h3 class="text-dark">Web Development</h3>
							<p class="text-grey">Built using HTML5 and CSS3 under Bootstrap 3 framework</p>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 match-height wow fadeIn" data-wow-delay=".4s">
						<div class="about-content">
							<i class="fa fa-mobile fa-4x text-accent"></i>
							<h3 class="text-dark">Mobile Friendly</h3>
							<p class="text-grey">Employs responsive web design to accomodate any screen size</p>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 match-height wow fadeIn" data-wow-delay=".6s">
						<div class="about-content">
							<i class="fa fa-pencil fa-4x text-accent"></i>
							<h3 class="text-dark">UI/UX</h3>
							<p class="text-grey">Minimalistic layout that can be adapted to the needs of the project</p>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 match-height wow fadeIn" data-wow-delay=".8s">
						<div class="about-content">
							<i class="fa fa-rocket fa-4x text-accent"></i>
							<h3 class="text-dark">Optimized</h3>
							<p class="text-grey">Lower CSS and JS footprint using Grunt for faster load times</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- END ABOUT -->
```

The icon pack used is [Font-Awesome](http://fortawesome.github.io/Font-Awesome/icons/). Consult the link provided to see what's available.

Animations are derived from [animate.css](https://daneden.github.io/animate.css/). Consult the link provided to see what's available.

### 5. Work Section

To alter the text in this section navigate to the following with index.html:

```html
	<section id="work" class="section">
		<div class="container-fluid section-wrapper">
			<div class="section-content">
				<div class="row">
					<div class="col-md-12 text-center">
						<h2 class="section-title uppercase text-grey">My Work</h2>
						<p class="section-subtitle text-grey">
							Edge to edge carousel that makes your accomplishments the focal point.
						</p>
						<span class="divider center"></span>
					</div>
				</div>
			</div>
		</div>
	</section>
```

#### 5.1 Work Carousel

Find the following within index.html:

```html
<section class="work-carousel wow fadeIn">
```

Within this section are 2 item classes. Each item class represents a project:

```html
		<div class="item" style="background-image: url('/img/dist/projects/project1/background.jpg')">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-4 col-md-push-8">
						<div class="project-details">
							<span class="project-name">Project 1</span>
							<span class="project-description">
							Tag line for Project 1</span>
							<span class="divider"></span>
							<a href="#" class="btn btn-outline-light">Live Demo <i class="fa fa-long-arrow-right fa-fw"></i></a>
							<a href="#" class="btn btn-outline-light">Source <i class="fa fa-code fa-fw"></i></a>
						</div>
					</div>
					<div class="col-md-8 col-md-pull-4 hidden-xs">
                        <img src="/img/dist/projects/project1/image.png" class="img-responsive work-image" alt="">
                    </div>
				</div>
			</div>
		</div>
```

Alter the details of each item to reflect your project. The /img/ directory will depend on whether you are using Grunt or not. Regardless when adding new project images add them to the /img/src directory. If using Grunt however, reference the /img/dist directory in index.html in order to use the optimized version of your images. To add more projects copy and paste this format within the work-carousel section class. 

For project images create a directory for each project within the img/src/projects directory. This format is especially important if using Grunt. Furthermore, if using Grunt then optimize the images by finding the following within Gruntfile.js:

```javascript
imagemin: {                          // Task 
	    static: {                          // Target 
	      options: {                       // Target options 
	        optimizationLevel: 1,
	        svgoPlugins: [{ removeViewBox: false }],
	        use: [mozjpeg()]
	      },
	      files: {                         // Dictionary of files   // 'destination': 'source'
	        'img/dist/favicon.png': 						'img/src/favicon.png',
	        'img/dist/favicon_180.png': 					'img/src/favicon_180.png',
	        'img/dist/general/background.jpg': 				'img/src/general/background.jpg', 
	        'img/dist/general/profile.jpg': 				'img/src/general/profile.jpg',
	        'img/dist/projects/project1/background.jpg': 	'img/src/projects/project1/background.jpg',
	        'img/dist/projects/project1/image.png': 		'img/src/projects/project1/image.png',
	        'img/dist/projects/project2/background.jpg': 	'img/src/projects/project2/background.jpg',
	        'img/dist/projects/project2/image.png': 		'img/src/projects/project2/image.png'
	      }
    	}
    },
```

If you only have 2 projects to present use the existing directories and add your images to them by deleting the existing images. Then rename your images to the same name as the deleted images that correspond. However when adding new projects, the corresponding images should be referenced above in the Gruntfile so that they may be optimized. Note, edit within /src but deploy optimized versions to /dist. 


Each project has buttons that correspond with it. You may change these by finding the following in each item class:

```html
	<a href="#" class="btn btn-outline-light">Live Demo <i class="fa fa-long-arrow-right fa-fw"></i></a>
	<a href="#" class="btn btn-outline-light">Source <i class="fa fa-code fa-fw"></i></a>
```
The icon pack used is [Font-Awesome](http://fortawesome.github.io/Font-Awesome/icons/). Consult the link provided to see what's available.

You may add as many projects to the carousel as you'd like.

### 6. Contact Section

To add your contact details find the following within index.html:

```html
<!-- START CONTACT -->
	<section id="contact" class="section">
		<div class="container-fluid section-wrapper">
			<div class="section-content">
				<div class="row">
					<div class="col-md-12 text-center">
						<h2 class="section-title uppercase text-grey">Let's Talk</h2>
						<p class="section-subtitle text-grey">
							Contact the developer and download the theme.
						</p>
						<span class="divider center"></span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="social" class="section bg-grey">
		<div class="container section-wrapper">
			<div class="section-content">
				<div class="row text-center content-row">
					<div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 wow fadeIn" data-wow-delay=".2s">
						<div class="about-content">
							<a class="btn btn-round" href="mailto:pranavrele@gmail.com">
								<i class="fa fa-envelope fa-2x fa-fw"></i>
							</a>
							<h3 class="text-dark">Mail</h3>
						</div>	
					</div>
					<div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 wow fadeIn" data-wow-delay=".4s">
						<div class="about-content">
							<a class="btn btn-round" href="https://github.com/pranavrele">
								<i class="fa fa-github fa-2x fa-fw"></i>
							</a>
							<h3 class="text-dark">Github</h3>
						</div>	
					</div>
					<div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 wow fadeIn" data-wow-delay=".6s">
						<div class="about-content">
							<a class="btn btn-round" href="https://twitter.com/pranavrele">
								<i class="fa fa-twitter fa-2x fa-fw"></i>
							</a>
							<h3 class="text-dark">Twitter</h3>
						</div>	
					</div>
					<div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 wow fadeIn" data-wow-delay=".8s">
						<div class="about-content">
							<a class="btn btn-round" href="https://www.linkedin.com/pub/pranav-rele/ab/a93/aa0">
								<i class="fa fa-linkedin fa-2x fa-fw"></i>
							</a>
							<h3 class="text-dark">LinkedIn</h3>
						</div>	
					</div>
					<div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 wow fadeIn" data-wow-delay=".8s">
						<div class="about-content">
							<a class="btn btn-round" href="https://dribbble.com/pranavrele">
								<i class="fa fa-dribbble fa-2x fa-fw"></i>
							</a>
							<h3 class="text-dark">Dribbble</h3>
						</div>	
					</div>
					<div class="col-xs-4 col-sm-4 col-md-2 col-lg-2 wow fadeIn" data-wow-delay=".8s">
						<div class="about-content">
							<a class="btn btn-round" href="https://github.com/pranavrele/codr">
								<i class="fa fa-download fa-2x fa-fw"></i>
							</a>
							<h3 class="text-dark">Download</h3>
						</div>	
					</div>
				</div>
			</div>
		</div>
	</section>
<!-- END CONTACT -->
```

The icon pack used is [Font-Awesome](http://fortawesome.github.io/Font-Awesome/icons/). Consult the link provided to see what's available. 

Animations are derived from [animate.css](https://daneden.github.io/animate.css/). Consult the link provided to see what's available.

### 7. Optimization

If you are using Grunt simply type the following within the shell once you have filled in all your information:

```shell
grunt
```

If you'd like to monitor your progress as you work use:

```shell
grunt watch
```
Once complete however simply run grunt one last time to ensure all went well. Please note that if using Grunt reference files and images within /dist directory for any section. If not using Grunt then reference /src. However it is strongly recommended that you use another optimization tool if not using Grunt in order to put less stress on the server.

### 8. Credits

#### Images

* [Hero](https://unsplash.com/alejandroescamilla)
* [Profile](https://unsplash.com/patryksobczak)
* [Project 1 Background](https://unsplash.com/nadirbalcikli)
* [Project 2 Background](https://unsplash.com/negativespace)
* [Project 1 & 2 Mockups](https://www.behance.net/gallery/FREE-Flat-Apples-Devices-Mockup/13493563)

#### Packages

* [jQuery](https://jquery.com/)
* [Bootstrap](http://getbootstrap.com/)
* [Modernizr](http://modernizr.com/)
* [jPreloader](http://www.inwebson.com/jquery/jpreloader-a-preloading-screen-to-preload-images/)
* [Font-Awesome](http://fortawesome.github.io/Font-Awesome/)
* [Animate.css](https://daneden.github.io/animate.css/)
* [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)
* [Owl Carousel](http://owlgraphic.com/owlcarousel/)
* [Detect Mobile Browser](http://detectmobilebrowsers.com/)
* [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/)
* [jQuery Sticky](http://stickyjs.com/)
* [jQuery Match Height](http://brm.io/jquery-match-height/)
* [WOW.js](http://mynameismatthieu.com/WOW/)
* [Skrollr](https://github.com/Prinzhorn/skrollr)

#### Support

* [Grunt](http://gruntjs.com/)
* [npm](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/)

### 9. Contact & Issues

If you've found a bug feel free to [Open an issue](https://github.com/pranavrele/codr/issues) here Github. This is the fastest way to reach me about possible bugs that may need to be resolved. 

If you would like to request new additions please feel free to send me an [Email](mailto:pranavrele@gmail.com) or send me a message via [Twitter](https://twitter.com/pranavrele).

### 10. Copyright

Copyright 2015 Pranav Rele. Code released under the Apache 2.0 license.