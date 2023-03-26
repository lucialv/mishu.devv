<template>
    <main>
        <div class="center">
            <h1 class="title">{{error.statusCode}}</h1>
            <h2 class="h3 text-muted">{{mappings[error.statusCode] || error.message}}</h2>
        </div>
    </main>
</template>

<script>
export default {
    props: ["error"],
    layout: "error",
    data() {
        return {
            mappings: {
                404: "Page not found.",
                503: "Service is temporarily unavailable.",
                504: "API server is unreachable."
            }
        }
    }
}
</script>