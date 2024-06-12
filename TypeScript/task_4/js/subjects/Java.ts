namespace Subjets {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      if (this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
