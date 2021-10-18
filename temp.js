{
	nearbyUsers.map((element, index) => {
		return (
			<Marker
				pinColor="red"
				key={index}
				coordinate={{ latitude: 47.7330388, longitude: 122.40371218 }}
			/>
		);
	});
}
