<template>
  <div class="feedbacks wrapper">
      <div class="feedbacks_content">
          <h1>Отзывы</h1>
        <div class="feedbacks_slider">
            <div
                class="feedbacks_feedback"
                v-for="feedback of feedbacks"
                v-bind:key="feedback.id"
                v-bind:class="{ feedbacks_feedbackhide: (feedback.id <= currentFeedbackId) || (feedback.id > currentFeedbackId + 3) }"
            >
                <p>{{ feedback.text }}</p>
            </div>
        </div>
        <button v-on:click="prevSlide()">Prev slide</button>
        <button v-on:click="nextSlide()">Next slide</button>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      feedbacks: [
          { id: 1, text: "11111"},
          { id: 2, text: "22222"},
          { id: 3, text: "33333"},
          { id: 4, text: "44444"},
          { id: 5, text: "55555"},
          { id: 6, text: "66666"},
          { id: 7, text: "77777"}
      ],
      currentFeedbackId: 0
    }
  },
  methods: {
      nextSlide() {
          this.currentFeedbackId++;
          console.log(this.currentFeedbackId)
      },
      prevSlide() {
          if (this.currentFeedbackId !== 0) {
            this.currentFeedbackId--;
            console.log(this.currentFeedbackId)
          }
      }
  }
}
</script>

<style lang="sass">
.feedbacks {
    &_feedbackhide {
        display: none;
    }
    &_content {
        
    }
}
</style>