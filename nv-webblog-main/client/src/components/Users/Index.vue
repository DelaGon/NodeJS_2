<template>
    <div>
        <h2>Get all users</h2>
        <h4>จํานวนผู้ใช้งาน {{ users.length }}</h4>
        <p><button v-on:click="navigateTo('/user/create')">สร้างผู้ใช้งาน</button></p>
        <div v-for="user in users" v-bind:key="user.id">
            <p>id: {{ user.id }}</p>
            <p>ชืEอ-นามสกุล: {{ user.name }} - {{ user.lastname }}</p>
            <p>email: {{ user.email }}</p>
            <p>password: {{ user.password }}</p>
            <p>
                <button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู ้ใช ้</button> <button
                    v-on:click="navigateTo('/user/edit/' + user.id)">แก ้ไขข ้อมูล
                </button>
                <button v-on:click="deleteUser(user)">ลบข ้อมูล</button>
            </p>

            <hr>
        </div>
    </div>
</template>
<script>
import UsersService from '@/services/UsersService';
export default {
    data() {
        return {
            users: []
        }
    },
    async created() {
    try {
        this.users = (await UsersService.getUsers()).data;
    } catch (error) {
        console.log(error);
    }
},
methods: {
    navigateTo(route) {
        this.$router.push(route);
    },
    async deleteUser(user) {
        let result = confirm("Want to delete?");
        if (result) {
            try {
                await UsersService.delete(user);
                // หลังจากลบผู้ใช้แล้วควรโหลดข้อมูลผู้ใช้ใหม่
                this.users = (await UsersService.getUsers()).data;
            } catch (err) {
                console.log(err);
            }
        }
    }
}
    }
</script>
<style scoped></style>