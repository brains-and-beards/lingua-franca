<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import type { IComponent } from "@assets/components";

  export let components: Array<IComponent>
</script>

<DataTable table$aria-label="Components list" style="max-width: 80%">
  <Head>
    <Row class="border-2">
      <Cell class="w-1/5 border-2">reactNativeName</Cell>
      <Cell class="w-1/5 border-2">iOSComponent</Cell>
      <Cell class="w-1/5 border-2">androidComponent</Cell>
      <Cell class="w-1/5 border-2">webComponent</Cell>
      <Cell class="w-1/5 border-2">reactNativeImplementation</Cell>
      <Cell class="w-1/5 border-2">comments</Cell>
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
