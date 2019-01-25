<template>
	<div 
		class="current_color_display"
		:style="{ backgroundColor: this.color }"
	>

	</div>
</template>

<script>
	export default {
		name: 'ActiveColor',
		props: {
			color: String
		}
	};
</script>

<style lang="scss" scoped>
	.current_color_display {
		margin-top: 1rem;
		height: 3em;
		width: 100%;
		border: 5px solid #333;
		transition: all .2s;
	}
</style>