const RoomPage = async (props: PageProps<"/rooms/[id]">) => {
  await props.params;

  return <main />;
};

export default RoomPage;
