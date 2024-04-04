<script setup>
// once the "useState" is executed, it will be globally available
const globalState = useState('globalState', () => 'is globally available');
const globalStateIndex = useState('globalStateIndex');
const globalStateWorld = useState('globalStateWorld');

const isCustomHeaderEnabled = ref(false);
const handleToggleCustomHeader = () => {
  isCustomHeaderEnabled.value = !isCustomHeaderEnabled.value;
}

// router.push() adds a route to the router, and also navigates the client to the new route
const router = useRouter();
const handleDynamicPageRoute = () => router.push(`/dynamic-page-${(Math.random() * 100).toFixed()}`);
const handleNotFoundRoute = () => router.push((Math.random() + 1).toString(36).slice(2));

// both logs should print to the client console when in dev mode
if (process.server) console.log('Process on Server');
if (process.client) console.log('Process on Client');

// importing and printing app config ("app.config.ts")
const appConfig = useAppConfig();
console.log(appConfig.foo);

const handleInternalReq = async () => {
  // this should not be used, "useFetch" should only be used on the "setup" lifecycle, use $fetch for any requests after setup stage
  // const res = await useFetch('http://localhost:3000/api/test/test');

  const requestPrefix = `${window.location.protocol}//${window.location.host}/api`;
  const res = await $fetch(`${requestPrefix}/test/test`);
  alert(`Request Output: ${res}`);
};
const handleExternalReq = async () => {
  const res = await $fetch(`https://api.openbrewerydb.org/v1/breweries`);
  alert(`Request Output: ${res.length}`);
};

const handleThrowFatalError = () => {
  // if error occurs on server side (can be checked with "process.server"), it will ALWAYS be fatal (stops execution)
  throw createError({statusCode: 500, statusMessage: 'Manual Crash', fatal: true});
};

</script>

<template>
  <!-- ClientOnly should be called only when needed [E.G. using document, localStorage, etc... ]  -->
  <!--  <ClientOnly>
        <template #fallback>
          LOADING...
        </template>
        ...
    -->

  <div>
    1
    <ul class="link-list">
      <li>
        <NuxtLink to="/">Index</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/hello-world">World</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" @click="handleDynamicPageRoute">Dynamic</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" @click="handleNotFoundRoute">Not Found</NuxtLink>
      </li>
    </ul>
    <hr>

    2
    <div>
      Global State in app.vue: {{ globalState }}
      <br>
      Global State "Index" in app.vue: {{ globalStateIndex }}
      <br>
      Global State "World" in app.vue: {{ globalStateWorld }}
    </div>
    <hr>

    3
    <NotPage/>
    <hr>

    4
    <br>
    <button @click="handleToggleCustomHeader">
      Toggle Custom Header
    </button>
    <!--  If no layout is specified, layouts/default.vue will be used [page layout can be set through setPageLayout('layout')]  -->
    <NuxtLayout>
      <template v-if="isCustomHeaderEnabled" #header>
        My Custom Header
      </template>
    </NuxtLayout>
    <hr>

    5
    <!--  NuxtLoadingIndicator is used to "Display a progress bar between page navigations"  -->
    <NuxtLoadingIndicator/>
    <NuxtPage/>
    <hr>

    6
    <br>
    <button @click="handleInternalReq">Internal Request</button>
    <br>
    <button @click="handleExternalReq">External Request</button>
    <hr>

    7
    <br>
    <button @click="handleThrowFatalError">Throw Fatal Error</button>
  </div>
</template>

<style>
body {
  background-color: rgb(25, 25, 25);
  color: white;
}

.link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.link-list {
  background-color: whitesmoke;
  width: fit-content;
  padding-inline-end: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-start-end-radius: 15px;
  border-end-end-radius: 15px;
}
</style>

<style scoped>
hr {
  margin-top: 2rem;
}

</style>