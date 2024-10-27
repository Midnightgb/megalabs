<template>
    <div class="form-field">
        <label :class="{ 'label-focused': focused }">{{ label }}</label>
        <input 
            :type="type" 
            :value="modelValue"
            :class="{ 'input-error': isError }"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            @focus="focused = true" 
            @blur="onBlur"
        >
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({
    label: String,
    type: {
        type: String,
        default: 'text',
    },
    modelValue: {
        type: String,
        required: true
    },
    isError: {
        type: Boolean,
        default: false,
    }
});
console.log("error en input " + props.isError);

const emit = defineEmits(['update:modelValue', 'update:isError']);

// Crear una propiedad reactiva para el enfoque
const focused = ref(false);

const onBlur = (event: any) => {
    const value = event.target.value;
    focused.value = !!value;
    emit('update:isError', false);
    console.log(focused.value);
}
</script>

<style lang="scss" scoped>
.form-field{
    position: relative;
    margin-bottom: 1rem;
    height: 50px;

    label{
        position: absolute;
        left: 1rem;
        top: 1rem;
        padding: 0 0.25rem;
        color: #978c8c;
        font-size: 1rem;
        transition: 0.2s;
    }

    input{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        font-size: 17px;
        font-weight: 100;
        border: 2px solid #e0e0e0;
        border-radius: 10px;
        outline: none;
        padding: 1rem;
        background: none;
        z-index: 1;
        color: black;
        &.input-error {
            border-color: #ff0000;
        }
    }

    input:focus {
        border-color: #00986e;
    }

    .label-focused{
        top: -0.5rem;
        left: 0.8rem;
        font-size: 14px;
        font-weight: 500;
        background-color: #ffffff;
        z-index: 10;
    }
}
</style>