<template>
    <td class="p-2 whitespace-nowrap">
        <router-link :to='{ name:"team_detail",  params: { id } }'><div class="font-medium text-center text-gray-800">{{name}}</div></router-link>
    </td>
</template>

<script>
export default {
    name: 'tableComponent',
    props: {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
    }
}
</script>
