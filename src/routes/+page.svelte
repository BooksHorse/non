<script lang="ts">
	import { fareCalculate } from '../lib/calculate';
	import 'carbon-components-svelte/css/g100.css';
	import { NumberInput, Tile, Content, Grid, Row, Column } from 'carbon-components-svelte';
	let kilometers = 0;
	let minutes = 0;
</script>

<svelte:head>
	<title>Taxi Fare Calculator</title>
</svelte:head>
<Content>
	<Grid>
		<Row>
			<Column>
				<h1>คำนวณระยะทาง Taxi</h1>
				<p>
					นำข้อมูลทั้งหมดมาจาก <a href="https://maps.google.com">Google Maps</a> หลังจากนั้นใส่ข้อมูลข้างล่าง
				</p>
			</Column>
		</Row>
		<Row>
			<Column>
				<!-- <p>กิโลเมตร <input bind:value={kilometers}></p>
            <p>นาที <input bind:value={minutes}></p> -->
				<NumberInput label="ระยะทาง (กิโลเมตร)" bind:value={kilometers} placeholder="ระยะทาง" />
			</Column>
		</Row>
		<Row>
			<Column>
				<NumberInput
					label="เวลาเวลาที่ใช้ในการเดินทาง (นาที)"
					bind:value={minutes}
					placeholder="เวลาที่ใช้ในการเดินทาง"
				/>
			</Column>
		</Row>
		<Row>
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
