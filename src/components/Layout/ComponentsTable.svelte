<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import type { IComponent } from "@assets/components";

  export let components: Array<IComponent>
</script>

<DataTable table$aria-label="Components list"  class="max-w-75[vw] justify-center">
  <Head>
    <Row class="border-2">
      <Cell class="w-1/5 border-2 max-w-1/5">React Native Name</Cell>
      <Cell class="w-1/5 border-2 max-w-1/5">iOS Component</Cell>
      <Cell class="w-1/5 border-2 max-w-1/5">Android Component</Cell>
      <Cell class="w-1/5 border-2 max-w-1/5">Web Component</Cell>
      <Cell class="w-1/5 border-2 max-w-1/5">React Native Implementation</Cell>
      <Cell class="w-1/5 border-2 max-w-1/5">Comments</Cell>
    </Row>
  </Head>
  <Body>
    {#each components as el}
      <Row class="flex-auto justify-center align-middle">
        <Cell class="flex justify-center align-middle">{el.reactNativeName}</Cell>
        <Cell class="flex-auto justify-center align-middle">{el.iOSComponent.name}</Cell>
        <Cell class="flex-auto justify-center align-middle">{el.androidComponent.name}</Cell>
        <Cell class="flex-auto justify-center align-middle">{el.webComponent.name}</Cell>

        <Cell class="flex-auto justify-center align-middle">
          {#each el.reactNativeImplementation as implementation}
            <p>{implementation}</p>
          {/each}
        </Cell>
        <Cell class="flex flex-1 flex-auto justify-center align-middle">
          {#each el.comments as comment}
            {#if comment.variant === 'caution'}
              <p class="bg-red-500">{comment.text}</p>
            {:else if comment.variant === 'warning'}
              <p class="bg-yellow-400">{comment.text}</p>
            {:else }
              <p>{comment.text}</p>
            {/if}
          {/each}
        </Cell>
      </Row>
    {/each}
  </Body>
</DataTable>
