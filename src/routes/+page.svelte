<script lang="ts">
	import { fareCalculate } from '../lib/calculate';

	import "carbon-components-svelte/css/g90.css";
	import Taxi from "carbon-icons-svelte/lib/Taxi.svelte";
// 	import '../../node_modules/carbon-components/scss/components/tile/_tile.scss';
// 	import '../../node_modules/carbon-components/scss/globals/scss/_css--reset.scss';
// import '../../node_modules/carbon-components/scss/globals/scss/_css--font-face.scss';
// import '../../node_modules/carbon-components/scss/globals/scss/_css--helpers.scss';
// import '../../node_modules/carbon-components/scss/globals/scss/_css--body.scss';
// import '../../node_modules/carbon-components/scss/globals/scss/_theme.scss';
// import '../../node_modules/carbon-components/scss/globals/grid/_grid.scss';
// import '../../node_modules/carbon-components/scss/components/number-input/_number-input.scss';
// import '../../node_modules/carbon-components/scss/components/tile/_tile.scss';
	//import 'carbon-components-svelte/css/g100.css';
	import {NumberInput, Tile, Content, Grid, Row, Column,Link } from 'carbon-components-svelte';
	let kilometers = 0;
	let minutes = 0;


</script>





<style lang="scss">
	// Your entrypoint for including sass files from Carbon

	
	// Include defaults typically provided through the `styles.scss` entrypoint
	
	
	// Optionally include the grid
	
	
	// Optionally include components that you need
	
	
	
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap');
	:global(*) {
		font-family: 'IBM Plex Sans Thai', sans-serif !important;
	}
	</style>
<svelte:head>
	<title>Taxi Fare Calculator</title>
</svelte:head>

<Content>
	
	<Grid>
		<Row padding>
			<Column>
				<h1>คำนวณระยะทาง Taxi <Taxi size={32}/></h1>
				<p>
					นำข้อมูลทั้งหมดมาจาก <Link href="https://maps.google.com">Google Maps</Link> หลังจากนั้นใส่ข้อมูลข้างล่าง
				</p>
			</Column>
		</Row>
		<Row padding>
			<Column>
				<!-- <p>กิโลเมตร <input bind:value={kilometers}></p>
            <p>นาที <input bind:value={minutes}></p> -->
				<NumberInput
					min={0}
					label="ระยะทาง (กิโลเมตร)"
					bind:value={kilometers}
					placeholder="ระยะทาง"
					invalidText="ค่าต้องมากกว่า 0"
				/>
			</Column>
		</Row>
		<Row padding>
			<Column>
				<NumberInput
					min={0}
					label="เวลาที่ใช้ในการเดินทาง (นาที)"
					bind:value={minutes}
					placeholder="เวลาที่ใช้ในการเดินทาง"
					invalidText="ค่าต้องมากกว่า 0"
				/>
			</Column>
		</Row>
		<Row padding>
			<Column>
				<Tile>
					<h2>
						ค่า Taxi ประมาณ {fareCalculate(kilometers, minutes)} บาท
					</h2>
					<p>ค่าประมาณคลาดเคลื่อน 3-4 บาท</p>
				</Tile>
			</Column>
		</Row>
	</Grid>
</Content>
