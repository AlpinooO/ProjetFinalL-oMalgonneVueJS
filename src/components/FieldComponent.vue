<template>
    <div>
        <label :for="data.type">{{ String(data.id) }}</label>
        <input :type="data.type" :id="String(data.id)" :placeholder="data.placeholder">
    </div>

</template>
<script lang="ts" setup>

interface dataInterface {
    id: string | number;
    placeholder : string;
    type: string;
}

interface FieldComponentProps {
    data: dataInterface;
}

defineProps<FieldComponentProps>();
</script>