'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">croc-movie documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5f87d14f88d1d4d337e126a842de324d"' : 'data-target="#xs-components-links-module-AppModule-5f87d14f88d1d4d337e126a842de324d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5f87d14f88d1d4d337e126a842de324d"' :
                                            'id="xs-components-links-module-AppModule-5f87d14f88d1d4d337e126a842de324d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-5f87d14f88d1d4d337e126a842de324d"' : 'data-target="#xs-injectables-links-module-AppModule-5f87d14f88d1d4d337e126a842de324d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5f87d14f88d1d4d337e126a842de324d"' :
                                        'id="xs-injectables-links-module-AppModule-5f87d14f88d1d4d337e126a842de324d"' }>
                                        <li class="link">
                                            <a href="injectables/TranslateappService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TranslateappService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-cf389fcfc8716cc72498f2fac13aefc6"' : 'data-target="#xs-components-links-module-ComponentsModule-cf389fcfc8716cc72498f2fac13aefc6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-cf389fcfc8716cc72498f2fac13aefc6"' :
                                            'id="xs-components-links-module-ComponentsModule-cf389fcfc8716cc72498f2fac13aefc6"' }>
                                            <li class="link">
                                                <a href="components/CarouselComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PosterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PosterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-cbef1840672dac1c54fc5839105e695b"' : 'data-target="#xs-components-links-module-LoginPageModule-cbef1840672dac1c54fc5839105e695b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-cbef1840672dac1c54fc5839105e695b"' :
                                            'id="xs-components-links-module-LoginPageModule-cbef1840672dac1c54fc5839105e695b"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginPageModule-cbef1840672dac1c54fc5839105e695b"' : 'data-target="#xs-injectables-links-module-LoginPageModule-cbef1840672dac1c54fc5839105e695b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginPageModule-cbef1840672dac1c54fc5839105e695b"' :
                                        'id="xs-injectables-links-module-LoginPageModule-cbef1840672dac1c54fc5839105e695b"' }>
                                        <li class="link">
                                            <a href="injectables/NetworkService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NetworkService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link">LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MapsPageModule.html" data-type="entity-link">MapsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MapsPageModule-cc3eb59ef366eaeb3ac5530e7e4bd88f"' : 'data-target="#xs-components-links-module-MapsPageModule-cc3eb59ef366eaeb3ac5530e7e4bd88f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MapsPageModule-cc3eb59ef366eaeb3ac5530e7e4bd88f"' :
                                            'id="xs-components-links-module-MapsPageModule-cc3eb59ef366eaeb3ac5530e7e4bd88f"' }>
                                            <li class="link">
                                                <a href="components/MapsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MapsPageRoutingModule.html" data-type="entity-link">MapsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MasterPageModule.html" data-type="entity-link">MasterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MasterPageModule-43fb53a2d9a3dea2a579b405e5ef4db9"' : 'data-target="#xs-components-links-module-MasterPageModule-43fb53a2d9a3dea2a579b405e5ef4db9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MasterPageModule-43fb53a2d9a3dea2a579b405e5ef4db9"' :
                                            'id="xs-components-links-module-MasterPageModule-43fb53a2d9a3dea2a579b405e5ef4db9"' }>
                                            <li class="link">
                                                <a href="components/MasterPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MasterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MasterPageRoutingModule.html" data-type="entity-link">MasterPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-12cf8d184538491b1733dc19211765e6"' : 'data-target="#xs-pipes-links-module-PipesModule-12cf8d184538491b1733dc19211765e6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-12cf8d184538491b1733dc19211765e6"' :
                                            'id="xs-pipes-links-module-PipesModule-12cf8d184538491b1733dc19211765e6"' }>
                                            <li class="link">
                                                <a href="pipes/ImagePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImagePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link">DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MoviesService.html" data-type="entity-link">MoviesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkService.html" data-type="entity-link">NetworkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslateappService.html" data-type="entity-link">TranslateappService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpConfigInterceptor.html" data-type="entity-link">HttpConfigInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cast.html" data-type="entity-link">Cast</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreditsMovie.html" data-type="entity-link">CreditsMovie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Crew.html" data-type="entity-link">Crew</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DetailMovie.html" data-type="entity-link">DetailMovie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Genre.html" data-type="entity-link">Genre</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListMovie.html" data-type="entity-link">ListMovie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Movie.html" data-type="entity-link">Movie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Productioncompany.html" data-type="entity-link">Productioncompany</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Productioncountry.html" data-type="entity-link">Productioncountry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Spokenlanguage.html" data-type="entity-link">Spokenlanguage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});