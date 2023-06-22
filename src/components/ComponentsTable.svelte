<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import type { IComponent } from "@assets/components";
  import InfoIcon from '@assets/icons/info.svg'
  import WarningIcon from '@assets/icons/warning.png'

  export let components: Array<IComponent>
</script>

<DataTable table$aria-label="Components list"  class="max-w-75[vw] justify-center px-[4rem] my-5">
  <Head>
    <Row class="border-2 bg-gray-100 border-gray-100">
      <Cell class="w-1/5 p-4">React Native Name</Cell>
      <Cell class="w-1/5 p-4">iOS Component</Cell>
      <Cell class="w-1/5 p-4">Android Component</Cell>
      <Cell class="w-1/5 p-4">React Native Implementation</Cell>
      <Cell class="w-1/5 p-4">Comments</Cell>
    </Row>
  </Head>
  <Body>
    {#each components as el}
      <Row class="border-x-2 border-b-2 border-gray-100">
        <Cell class="p-2">
          <div class='firstCell'>
          {el.reactNativeName}
          </div>
        </Cell>

        <Cell class="p-2">
          <div class="tableCell">
            {el.iOSComponent.name}
            {#if el.iOSComponent.image}
              <img src={el.iOSComponent.image} class='max-h-[200px] max-w-[100px]' alt='{el.iOSComponent.name}'>
            {/if}
          </div>
        </Cell>

        <Cell class="p-2">
          <div class="tableCell">
            {el.androidComponent.name}
            {#if el.androidComponent.image}
              <img src={el.androidComponent.image} class=' max-h-[200px] max-w-[100px]' alt={el.androidComponent.name}>
            {/if}
          </div>
        </Cell>

        <Cell class="p-2">
          <div class="tableCell">
            {#if el.reactNativeImplementation?.length > 0}
              {#each el.reactNativeImplementation as implementation}
                <a href={implementation.link} class="text-blue-600 after:content-['_↗']">
                  {implementation.text}
                </a>
              {/each}
              {:else}
              <p>/</p>
            {/if}
          </div>
        </Cell>

        <Cell class="p-2 items-start">
          {#each el.comments as {variant, text}}
            {#if variant === 'caution'}
              <div class="bg-[#FD7E1468] flex p-2">
                <img src={WarningIcon} class='w-[25px] h-[25px] mr-2' alt='warning'/>
                <p>{text}</p>
              </div>
            {:else if variant === 'warning'}
              <div class="bg-[#FD7E143A] flex p-2">
                <img src={WarningIcon} class='w-[25px] h-[25px] mr-2' alt='warning'/>
                <p>{text}</p>
              </div>
            {:else if variant === 'info'}
              <div class="bg-[#228BE656] flex p-2">
                <img src={InfoIcon} class='w-[25px] h-[25px] mr-2' alt='information'/>
                <p>{text}</p>
              </div>
            {:else }
              <p>{text}</p>
            {/if}
          {/each}
        </Cell>
      </Row>
    {/each}
  </Body>
</DataTable>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .firstCell {
      @apply flex justify-center align-middle p-2 items-center text-center;
    }
    .tableCell {
      @apply flex flex-col items-center;
    }
</style>
