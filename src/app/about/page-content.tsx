import Link from 'next/link';

export function AboutContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-3 font-mono text-3xl font-bold">About Me</h1>
        <p className="dark:text-zinc-400">
          I&apos;m a full-stack development student with a passion for modern web technologies. I focus on writing
          clean, efficient code and crafting thoughtful designs to deliver seamless and engaging user experiences.
        </p>
      </div>

      <div className="border-t border-white/20 pt-6 dark:border-white/10">
        <h2 className="mb-2 font-mono text-xl font-bold">Background</h2>
        <p className="dark:text-zinc-400">
          My journey into web development began with a passion for technology and creativity. This is why I relish the
          combination of both aspects in my role as a full-stack developer. I have established a solid foundation in
          both frontend and backend technologies, primarily concentrating on frontend frameworks such as React and
          JavaScript.
        </p>
      </div>

      <div className="border-t border-white/20 pt-6">
        <h2 className="mb-2 font-mono text-xl font-bold text-zinc-900 dark:text-white">Outside of Coding</h2>
        <p className="dark:text-zinc-400">
          When I&apos;m not coding, I love to play music with my band,{' '}
          <Link
            href="https://linktr.ee/pinkonred"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-red-500 hover:underline"
          >
            Pink on Red
          </Link>{' '}
          whether we&apos;re just jamming or performing live.
        </p>
      </div>

      <p className="dark:text-zinc-400">
        I also enjoy playing video games or reading a good book to unwind. And when the weather&apos;s nice, you might
        find me on the golf course 🏌️‍♂️trying to convince myself that my swing is getting better (spoiler: it&apos;s
        not).
      </p>

      <div className="border-t border-white/20 pt-6">
        <h2 className="mb-2 font-mono text-xl font-bold text-zinc-900 dark:text-white">My Approach</h2>
        <p className="dark:text-zinc-400">
          I believe in creating solutions that are not only technically sound but also user-focused and accessible.
          Every project is an opportunity to learn something new and push my skills further.
        </p>
      </div>

      <div className="mt-6 border-t border-white/20 pt-6">
        <p className="text-center text-sm font-light dark:text-zinc-400">
          Don&apos;t hesitate to reach out if you want to collaborate on a project or discuss ideas. I&apos;m always
          open to new opportunities and connections!
        </p>
      </div>
    </div>
  );
}
