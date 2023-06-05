<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table'
  import type { IComponent } from "@assets/components";
  import InfoIcon from '@assets/icons/info.svg'
  import WarningIcon from '@assets/icons/warning.png'

  export let components: Array<IComponent>
</script>

<DataTable table$aria-label="Components list"  class="max-w-75[vw] justify-center">
  <Head>
    <Row class="border-2">
      <Cell class="w-1/5 border-2 max-w-1/5">React Native Name</Cell>
      <Cell class="w-1/5 border-2 max-w-1/5">iOS Component</Cell>
      <Cell class="w-1/5 border-2 max-w-1/5">Android Component</Cell>
      <Cell class="w-1/5 border-2 max-w-1/5">React Native Implementation</Cell>
      <Cell class="w-1/5 border-2 max-w-1/5">Comments</Cell>
    </Row>
  </Head>
  <Body>
    {#each components as el}
      <Row class="border-2">
        <Cell class="flex justify-center align-middle p-2">{el.reactNativeName}</Cell>
        <Cell class="p-2">
          <div class="flex flex-col  items-center">
            {el.iOSComponent.name}
            <img src={el.iOSComponent.image} class='w-[100%] h-[100%] max-h-[300px] max-w-[200px] '>
          </div>
        </Cell>
        <Cell class="p-2">

          <div class="flex flex-col  items-center">
            {el.androidComponent.name}
            <img src={el.androidComponent.image} class='w-[100%] h-[100%] max-h-[300px] max-w-[200px] '>
          </div>

        </Cell>
        <Cell class="p-2">
          <div class="flex flex-col  items-center">
          {#each el.reactNativeImplementation as implementation}
            <a href={implementation.link} class="text-blue-600 after:content-['_↗']">
              {implementation.text}
            </a>
          {/each}
          </div>
        </Cell>
        <Cell class="p-2">
          {#each el.comments as comment}
            {#if comment.variant === 'caution'}
              <div class="bg-[#FD7E1468] flex p-2">
                <img src={WarningIcon} class='w-[25px] mr-2'/>
                <p >{comment.text}</p>
              </div>
            {:else if comment.variant === 'warning'}
              <div class="bg-[#FD7E143A] flex p-2">
                <img src={WarningIcon} class='w-[25px] mr-2'/>
                <p >{comment.text}</p>
              </div>
            {:else if comment.variant === 'info'}
              <div class="bg-[#228BE656] flex p-2">
                <img src={InfoIcon} class='w-[25px] mr-2'/>
                <p >{comment.text}</p>
              </div>
            {:else }
              <p>{comment.text}</p>
            {/if}
          {/each}
        </Cell>
      </Row>
    {/each}
  </Body>
</DataTable>
