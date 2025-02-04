import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';
import TailWindThemeSelector from '../components/TailWindThemeSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import {
  faBeer,
  faCertificate,
  faCloudArrowDown,
  faCogs,
  faCubes,
  faDigging,
  faEye,
  faGaugeHigh,
  faListCheck,
  faPlug,
  faPuzzlePiece,
  faRocket,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

function DownloadClientLinks() {
  let operatingSystem = '';
  const userAgent = navigator.userAgent;

  if (userAgent.indexOf('Windows') != -1) {
    operatingSystem = 'Windows';
  } else if (userAgent.indexOf('Mac') != -1) {
    operatingSystem = 'macOS';
  } else if (userAgent.indexOf('Linux') != -1) {
    operatingSystem = 'Linux';
  }

  let mainButton;
  let otherButton;

  if (operatingSystem !== '') {
    mainButton = (
      <Link
        className="no-underline hover:no-underline inline-flex text-white hover:text-white bg-violet-600 border-0 py-2 px-6 my-4 focus:outline-none hover:bg-violet-700 rounded text-lg"
        to={'/downloads/' + operatingSystem}>
        Downloads for {operatingSystem}
      </Link>
    );
    otherButton = (
      <Link
        className="no-underline hover:no-underline ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 my-4  focus:outline-none hover:bg-gray-200 rounded text-lg"
        to="/downloads">
        Other downloads
      </Link>
    );
  } else {
    mainButton = (
      <Link
        className="no-underline hover:no-underline inline-flex text-white hover:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        to="/downloads">
        Download Page
      </Link>
    );
  }

  return (
    <div className="flex justify-center flex-col md:flex-row">
      {mainButton}
      {otherButton}
    </div>
  );
}

function DownloadGenericLinks() {
  return (
    <div className="flex justify-center">
      <Link
        className="no-underline hover:no-underline inline-flex text-white hover:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        to="/downloads">
        Download Page
      </Link>
    </div>
  );
}

function Hero() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <section className="text-gray-600 dark:text-gray-400 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl lg:text-6xl mb-4 font-medium text-gray-900 dark:text-white">
            Containers and Kubernetes for application developers
          </h1>
          <p className="text-base text-gray-700 dark:text-gray-500 md:text-lg">
            Leverage Podman engine.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-500 md:text-lg">
            Build, run, manage, inspect, connect to containers and more.
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=containers&repo=podman-desktop&type=star&count=true"
              frameBorder="0"
              scrolling="0"
              width="150"
              height="20"
              title="GitHub"></iframe>
          </div>
          <div className="flex justify-center">
            <img
              className="md:w-5/6 lg:w-11/12 w-full"
              src="https://raw.githubusercontent.com/containers/podman-desktop/media/screenshot.png"
            />
          </div>
        </div>
        <div className="flex justify-center">
          {/* With client mode, provides the link to the client browser */}
          <BrowserOnly fallback={<DownloadGenericLinks></DownloadGenericLinks>}>
            {() => {
              return <DownloadClientLinks />;
            }}
          </BrowserOnly>
        </div>
      </div>
    </section>
  );
}

function SectionTitle(props) {
  return (
    <div>
      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple-900 uppercase rounded-full dark:bg-purple-400 bg-purple-400">
        {props.name}
      </p>
    </div>
  );
}

function MultipleAtSameTime() {
  return (
    <section className="text-gray-600 dark:text-gray-400 dark:bg-zinc-800 bg-zinc-200 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-5">
          <SectionTitle name="engine" />
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-light leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            Handle different container engines at the same time
          </h2>
        </div>

        <div className="flex flex-col w-full text-center">
          <div className="mx-10">
            <FontAwesomeIcon size="3x" icon={faCubes} className="ml-2 mb-4 text-gray-800 dark:text-gray-200" />
          </div>
          <div className="flex flex-col items-center">
            <p className="leading-relaxed">Plug-in system manage different container engines at the same time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkInProgress() {
  return <div className="text-sm font-extralight text-purple-900 dark:text-purple-300">Work in progress</div>;
}

function KeepUpToDate() {
  return (
    <section className="text-gray-600 dark:text-gray-400 dark:bg-zinc-800 bg-zinc-200 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-5">
          <SectionTitle name="update" />

          <h2 className="max-w-lg mb-6 font-sans text-3xl font-light leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            Install and keeep up to date <span className="font-bold">Podman</span>
            <WorkInProgress />
          </h2>
        </div>

        <div className="flex flex-col w-full text-center">
          <div className="mx-10">
            <FontAwesomeIcon size="3x" icon={faRotateRight} className="ml-2 mb-4 text-gray-800 dark:text-gray-200" />
          </div>
          <div className="flex flex-col items-center">
            <p className="leading-relaxed">
              Install Podman and other dependencies directly from Podman Desktop if not yet installed.
            </p>
            <p className="leading-relaxed">Check for updates/Notify user on Windows and macOS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Extensibility() {
  return (
    <section className="text-gray-600 dark:text-gray-400 dark:bg-zinc-800 bg-zinc-200 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-5">
          <SectionTitle name="extensibility" />

          <h2 className="max-w-lg mb-6 font-sans text-3xl font-light leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            Bring new features with Docker Desktop Extensions or Podman Desktop plug-ins.
          </h2>
        </div>

        <div className="flex flex-col w-full text-center">
          <div className="mx-10">
            <FontAwesomeIcon size="3x" icon={faPlug} className="ml-2 mb-4 text-gray-800 dark:text-gray-200" />
          </div>
          <p className="leading-relaxed">Docker Desktop UI extensions support.</p>
          <p className="leading-relaxed">Implementation of host and ui API for Docker Desktop extensions</p>
          <p className="leading-relaxed">Reuse existing extensions directly in Podman Desktop</p>
        
          <ThemedImage className="py-4 md:w-5/6 lg:w-11/12 w-full" alt="Reuse Docker Desktop extensions" sources={{
              light: useBaseUrl('img/ddextensions/dd-support.png'),
              dark: useBaseUrl('img/ddextensions/dd-support.png'),
            }} />

          <div className="mx-10 mt-10">
            <FontAwesomeIcon size="3x" icon={faPuzzlePiece} className="ml-2 mb-4 text-gray-800 dark:text-gray-200" />
          </div>
          <div className="flex flex-col items-center">
            <p className="leading-relaxed">Container engines are plugged through extension points.</p>
            <p className="leading-relaxed">JavaScript extensions can contribute new behaviour</p>

            <div className="text-left my-4">
              <p className="-ml-5">Current Podman Desktop plug-ins:</p>
              <ul className="list-disc text-left">
                <li>Podman</li>
                <li>Docker</li>
                <li>Lima</li>
                <li>CRC/OpenShift Local</li>
              </ul>
            </div>




            <Link
              title="Extend Podman Desktop"
              className="no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 "
              to="/extend">
              <div className="mt-3 text-purple-900 dark:text-purple-400 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManageEverythingFromTheTray() {
  return (
    <section className="text-gray-600 dark:text-gray-400 dark:bg-zinc-800 bg-zinc-200 body-font py-24">
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-5">
          <SectionTitle name="tray" />

          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            Management from the tray icon
          </h2>
        </div>
        <div className="container px-5 pb-5 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 dark:text-gray-100 mb-20">
            Check status and start/stop container engines.
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-400 text-purple-800 mb-4 flex-shrink-0">
                <FontAwesomeIcon size="2x" icon={faEye} className="w-6 h-6 " />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2">Status</h2>

                <p className="leading-relaxed text-base">See the status of engine by looking at the icon.</p>
                <div className="inline-block">
                  - icon <img className="text-purple-400 inline-block" src="img/tray/tray-icon-empty.svg" /> means no
                  container engine have been detected.
                </div>
                <div className="inline-block">
                  - icon <img className="text-purple-400 inline-block" src="img/tray/tray-icon.svg" /> means container
                  engine is ready to use.
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-400 text-purple-900 mb-4 flex-shrink-0">
                <FontAwesomeIcon size="2x" icon={faDigging} className="w-6 h-6 " />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 dark:text-gray-100  text-lg title-font font-medium mb-2">Progress</h2>
                <p className="leading-relaxed text-base">
                  Check progress of actions by animated tray icons. <br />
                  Stay focused without notification/pop-up to discover if something is happening on the engine side
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-400 text-purple-900 mb-4 flex-shrink-0">
                <FontAwesomeIcon size="2x" icon={faListCheck} className="w-6 h-6 " />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2">Quick actions</h2>
                <p className="leading-relaxed text-base">Start or stop Podman machines directly from the tray icon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnterpriseReady() {
  return (
    <section className="text-gray-600 dark:text-gray-400 dark:bg-zinc-900 bg-zinc-100 body-font py-24">
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-5">
          <SectionTitle name="enterprise" />

          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            Enterprise ready
            <WorkInProgress />
          </h2>
        </div>
        <div className="container px-5 pb-5 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 dark:text-gray-100 mb-20">
            Match configuration options.
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-400 text-purple-800 mb-4 flex-shrink-0">
                <FontAwesomeIcon size="2x" icon={faCertificate} className="w-6 h-6 " />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2">Code signing</h2>

                <p className="leading-relaxed text-base">
                  macOS binaries are digitally signed (Windows certification is in)
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-400 text-purple-900 mb-4 flex-shrink-0">
                <FontAwesomeIcon size="2x" icon={faCloudArrowDown} className="w-6 h-6 " />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 dark:text-gray-100  text-lg title-font font-medium mb-2">Proxy</h2>
                <p className="leading-relaxed text-base">
                  Configure proxy within the tool. Avoid any painful files to edit.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-400 text-purple-900 mb-4 flex-shrink-0">
                <FontAwesomeIcon size="2x" icon={faCogs} className="w-6 h-6 " />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2">Registries</h2>
                <p className="leading-relaxed text-base">Manage OCI registries. Add/edit/delete registries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RunAnywhere() {
  return (
    <section className="text-gray-600 dark:text-gray-400 dark:bg-zinc-900 bg-zinc-100 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-5">
          <SectionTitle name="platform" />

          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            Run anywhere
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-500 md:text-lg">
            Use the same UI across different Operating Systems
          </p>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="p-4 w-11/12 md:w-1/2 lg:w-1/3">
            <div className="flex rounded-lg h-full bg-zinc-300 dark:bg-zinc-700 bg-opacity-60 p-8 flex-col">
              <Link
                title="Download for Windows"
                className="no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 "
                to="/downloads/Windows">
                <div className="flex items-center mb-3 flex-col">
                  <FontAwesomeIcon size="4x" icon={faWindows} />
                  <div className="inline-flex items-center justify-center rounded-full text-gray-900 dark:text-gray-300 flex-shrink-0"></div>
                  <h2 className=" text-lg title-font font-medium"> Windows</h2>
                </div>
              </Link>
              <div className="flex-grow">
                <div className="flex-grow w-full">
                  <p className="text-base text-right">exe or setup.exe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 w-11/12 md:w-1/2 lg:w-1/3">
            <div className="flex rounded-lg h-full bg-zinc-300 dark:bg-zinc-700 bg-opacity-60 p-8 flex-col">
              <Link
                title="Download for macOS"
                className="no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 "
                to="/downloads/macOS">
                <div className="flex items-center mb-3 flex-col">
                  <FontAwesomeIcon size="4x" icon={faApple} />
                  <div className="inline-flex items-center justify-center rounded-full text-gray-900 dark:text-gray-300 flex-shrink-0"></div>
                  <h2 className=" text-lg title-font font-medium"> macOS</h2>
                </div>
              </Link>
              <div className="flex-grow w-full">
                <p className="text-base text-right">arm64, x64 or unified dmg</p>
                <p className="text-base text-right">
                  <FontAwesomeIcon size="1x" icon={faBeer} className="ml-2" /> brew install podman-desktop
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 w-11/12 md:w-1/2 lg:w-1/3">
            <div className="flex rounded-lg h-full bg-zinc-300 dark:bg-zinc-700 bg-opacity-60 p-8 flex-col">
              <Link
                title="Download for Linux"
                className="no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 "
                to="/downloads/Linux">
                <div className="flex items-center mb-3 flex-col">
                  <FontAwesomeIcon size="4x" icon={faLinux} />
                  <div className="inline-flex items-center justify-center rounded-full text-gray-900 dark:text-gray-300 flex-shrink-0"></div>
                  <h2 className=" text-lg title-font font-medium"> Linux</h2>
                </div>
              </Link>

              <div className="flex-grow">
                <p className="text-base text-right">flatpak or zip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MainFeatures() {
  return (
    <section className="text-gray-600 dark:text-gray-400 dark:bg-zinc-900 bg-zinc-100 body-font py-24">
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-5">
          <SectionTitle name="features" />

          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            Main features
          </h2>
        </div>
        <div className="container px-5 pb-5 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 dark:text-gray-100 mb-20">
            Build, run and manage containers.
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-400 text-purple-800 mb-4 flex-shrink-0">
                <FontAwesomeIcon size="2x" icon={faGaugeHigh} className="w-6 h-6 " />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2">Fast</h2>

                <p className="leading-relaxed text-base list-disc">
                  <FontAwesomeIcon icon={faGaugeHigh} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  Start within second
                </p>
                <p className="leading-relaxed text-base">
                  <FontAwesomeIcon icon={faGaugeHigh} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  Zero-config <span className="font-extralight text-small">(if Podman is already running)</span>
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-400 text-purple-900 mb-4 flex-shrink-0">
                <FontAwesomeIcon size="2x" icon={faRocket} className="w-6 h-6 " />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2">Manage</h2>
                <p className="leading-relaxed text-base list-disc">
                  <FontAwesomeIcon icon={faCogs} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  Create custom Podman Machines
                </p>
                <p className="leading-relaxed text-base list-disc">
                  <FontAwesomeIcon icon={faRocket} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  Build images from Containerfile/Dockerfile
                </p>
                <p className="leading-relaxed text-base list-disc">
                  <FontAwesomeIcon icon={faRocket} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  Pull/Push images
                </p>
                <p className="leading-relaxed text-base list-disc">
                  <FontAwesomeIcon icon={faRocket} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  start/stop/inspect containers
                </p>
                <p className="leading-relaxed text-base list-disc">
                  <FontAwesomeIcon icon={faRocket} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  Terminal in your container from the tool
                </p>
                <p className="leading-relaxed text-base list-disc">
                  <FontAwesomeIcon icon={faRocket} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  Inspect logs
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-400 text-purple-900 mb-4 flex-shrink-0">
                <FontAwesomeIcon size="2x" icon={faCogs} className="w-6 h-6 " />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2">Configure</h2>
                <p className="leading-relaxed text-base list-disc">
                  <FontAwesomeIcon icon={faCogs} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  Configure OCI registries. Add/edit/delete registries
                </p>
                <p className="leading-relaxed text-base list-disc">
                  <FontAwesomeIcon icon={faCogs} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  Configure Proxy (work in progress)
                </p>
                <p className="leading-relaxed text-base list-disc">
                  <FontAwesomeIcon icon={faCogs} className="text-purple-800 w-3 h-3 mt-1 mr-2" />
                  Configure CPU/Memory/Disk of Podman machines (work in progress)
                </p>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-5">
          <Link
            title="Download for Linux"
            className="no-underline hover:no-underline text-gray-900 dark:text-white hover:dark:text-violet-600 "
            to="/features">
            <div className="mt-3 text-purple-900 dark:text-purple-400 inline-flex items-center">
              Discover More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  
  return (
    <Layout title="Leverage Podman with a Desktop App" description="Containers and Kubernetes for application developers">
      <TailWindThemeSelector />
      <Hero />
      <ManageEverythingFromTheTray />
      <RunAnywhere />
      <KeepUpToDate />
      <EnterpriseReady />
      <Extensibility />
      <MainFeatures />
      <MultipleAtSameTime />

    </Layout>
  );
}
