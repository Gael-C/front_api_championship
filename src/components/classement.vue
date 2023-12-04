<template>
    <v-table class="table-auto ">
    <thead slot="head">
        <v-th sortkey="classement"></v-th>
        <th></th>
        <th>Pts</th>
        <th>B</th>
        <th>V</th>
        <th>N</th>
        <th>D</th>
        <th>P</th>
        <th>C</th>
        <th>D</th>
    </thead>
    <tbody class="text-sm divide-y divide-gray-100">
        <tr>
          <td sortkey>{{ classement }}</td>
          <td>{{ nom }}</td>
          <td>{{ points }}</td>
          <td>{{ bonus }}</td>
          <td>{{ victoires }}</td>
          <td>{{ nuls }}</td>
          <td>{{ defaites }}</td>
          <td>{{ pour }}</td>
          <td>{{ contre }}</td>
          <td>{{ diff }}</td>
        </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
    name: 'classementComponent',
    props: {
        classement: {
        type: Number,
        required: true
        },
        nom: {
            type: String,
            required: true
        },
        points: {
            type: Number,
            required: true
        },
        bonus: {
            type: Number,
            required: true
        },
        victoires: {
            type: Number,
            required: true
        },
        nuls: {
            type: Number,
            required: true
        },
        defaites: {
            type: Number,
            required: true
        },
        pour: {
            type: Number,
            required: true
        },
        contre: {
            type: Number,
            required: true
        },
        diff: {
            type: Number,
            required: true
        }
    }
}
</script>
