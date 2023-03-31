<template>
    <form class="form">
        <input class="form__input" v-model="message.name" placeholder="Пользователь"/>
        <textarea class="form__textarea" v-model="message.text" placeholder="Сообщение"/>
        <button class="form__button" @click="checkForm($event)">Отправить</button>
    </form>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    data() {
        return {
            message: {
                id: '',
                name: '',
                text: '',
                date: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            allComments: 'comments/getAllComments'
        })
    },
    methods: {
        ...mapMutations({
            setNotifications: 'comments/setNotifications',
            addComment: 'comments/addComment',
        }),
        checkForm(e) {
            e.preventDefault();
            this.message.date = new Date()
            this.message.id = this.allComments.length + 1
            if (this.message.name !== '' && this.message.text !== '' && this.message.date !== '') {
                this.addComment({...this.message})
                this.setNotifications({
                    title: 'Успешно',
                    description: 'Комментарий добавлен',
                    type: 'success'
                })
                this.message.name = '';
                this.message.text = '';
                this.message.date = '';
                return
            }
            if (this.message.name === '') {
                this.setNotifications({
                    title: 'Ошибка',
                    description: 'Введите имя пользователя',
                    type: 'error'
                })
                return
            }
            if (this.message.text === '') {
                this.setNotifications({
                    title: 'Ошибка',
                    description: 'Введите Комментарий',
                    type: 'error'
                })
            }
        },
    }
}
</script>

<style scoped lang="scss">
.form {
    border: 2px solid #6fc;
    padding: 2rem;
    margin: 2rem 0 1rem 0;

    &__input, &__textarea, &__button {
        box-sizing: border-box;
        outline: none;
        padding: 0.5rem;
        color: #ffffff;
        background: none;
        display: block;
        border: 1px solid #6fc;
        margin: 1rem 0;

        &:active, &:focus {
            background-color: #133040;
        }

        &::placeholder {
            color: #ffffff;
        }
    }

    &__input {
        height: 2rem;
    }

    &__textarea {
        width: 100%;
    }

    &__button {
        width: 100%;
        cursor: pointer;
        font-size: 1.5rem;

        &:hover {
            background-color: #133040;
        }
    }
}

@media (max-width: 700px) {
    .form {
        &__input, &__textarea, &__button {
            width: 100%;
        }
    }
}
</style>