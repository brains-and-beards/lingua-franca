<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'

  export let components
</script>

<DataTable table$aria-label="People list" style="max-width: 100%;">
  <Head>
    <Row>
      <Cell>reactNativeName</Cell>
      <Cell>iOSComponent</Cell>
      <Cell>androidComponent</Cell>
      <Cell>webComponent</Cell>
      <Cell>reactNativeImplementation</Cell>
      <Cell>comments</Cell>
    </Row>
  </Head>
  <Body>
    {#each components as el}
      <Row>
        <Cell>{el.reactNativeName}</Cell>
        <Cell>{el.iOSComponent.name}</Cell>
        <Cell>{el.androidComponent.name}</Cell>
        <Cell>{el.webComponent.name}</Cell>
        <Cell>{el.reactNativeImplementation.join('\n')}</Cell>
        <Cell>{el.comments.map(comp => comp.text)}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>
