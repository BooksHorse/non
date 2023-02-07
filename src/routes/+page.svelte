<script lang="ts">
	import { fareCalculate } from '../lib/calculate';
	import 'carbon-components-svelte/css/g90.css';
	import Taxi from 'carbon-icons-svelte/lib/Taxi.svelte';
	import {
		NumberInput,
		Tile,
		Content,
		Grid,
		Row,
		Column,
		Link,
		Checkbox
	} from 'carbon-components-svelte';
	let kilometers = 1;
	let minutes = 0;
	let add_airplane = false;
	let additional = 0;
	let is_bigtaxi = false;
</script>

<svelte:head>
	<title>Taxi Fare Calculator</title>
</svelte:head>

<Content>
	<Grid>
		<Row padding>
			<Column>
				<h1>คำนวณระยะทาง Taxi <Taxi size={32} /></h1>
				<p>
					นำข้อมูลทั้งหมดมาจาก <Link href="https://maps.google.com">Google Maps</Link> หลังจากนั้นใส่ข้อมูลข้างล่าง
				</p>
			</Column>
		</Row>
		<Row padding>
			<Column>
				<NumberInput
					min={1}
					label="ระยะทาง (กิโลเมตร)"
					bind:value={kilometers}
					placeholder="ระยะทาง"
					invalidText="ค่าต้องมากกว่าหรือเท่ากับ 1"
				/>
			</Column>
		</Row>
		<Row padding>
			<Column>
				<NumberInput
					min={0}
					label="เวลาเผื่อรถติด (นาที)"
					bind:value={minutes}
					placeholder="เวลาเผื่อรถติด (นาที)"
					invalidText="ค่าต้องมากกว่าหรือเท่ากับ 0"
				/>
			</Column>
		</Row>
		<Row padding>
			<Column
				><Tile>
					<Checkbox labelText="แท็กซี่คันใหญ่ (เริ่มต้นที่ 40 บาท)" bind:checked={is_bigtaxi} />
					<Checkbox labelText="สนามบิน (+50 บาท)" bind:checked={add_airplane} />
					<NumberInput hideSteppers label="ค่าใช้จ่ายเพิ่มเติม (บาท)" bind:value={additional} />
				</Tile></Column
			>
		</Row>
		<Row padding>
			<Column>
				<Tile>
					<h2>
						ค่า Taxi ประมาณ {Math.ceil(fareCalculate(kilometers, minutes, is_bigtaxi)) +
							additional +
							(add_airplane ? 50 : 0)} บาท
					</h2>
					<p>ค่าประมาณคลาดเคลื่อน 3-4 บาท</p>
				</Tile>
			</Column>
		</Row>
	</Grid>
</Content>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap');
	:global(*) {
		font-family: 'IBM Plex Sans Thai', sans-serif !important;
	}
</style>
