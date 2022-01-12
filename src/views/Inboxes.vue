<template>
  <div>
    <div id="drawer-container">
        <ui-drawer>
            <ui-drawer-header>
                <ui-drawer-title>Title</ui-drawer-title>
                <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
            </ui-drawer-header>
            <ui-drawer-content>
                <ui-nav>
                    <ui-nav-item active>Create Email</ui-nav-item>
                    <ui-nav-item>View Inbox</ui-nav-item>
                </ui-nav>
            </ui-drawer-content>
        </ui-drawer>
    </div>

    <div id="emailAddresses"></div>


  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
